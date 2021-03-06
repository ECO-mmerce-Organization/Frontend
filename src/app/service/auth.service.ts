import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  linkAuth = 'https://ecommercegrupo6.herokuapp.com/usuarios'
  //linkAuth = 'http://localhost:8080/usuarios'

  constructor(
    private http: HttpClient
  ) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token) //Estamos trazendo as configurações de HEADERS para essa váriavel
  }
  

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.linkAuth + "/cadastrar", usuario)
  }
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.linkAuth + "/logar", usuarioLogin)

  }

  isOng() {
    if (environment.ong) {
      console.log("É uma ong")
    } else {
      console.log("Não é uma ong")
    }
  }

  getUserById (id :number): Observable<Usuario>{
    return this.http.get<Usuario>(this.linkAuth+ `/${id}`, this.token)
  }

  getOngs():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.linkAuth + "/ong")
  }
}