import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  cadastrar(usuario: Usuario): Observable<Usuario>{ 
    return this.http.post<Usuario>  ('https://ecommercegrupo6.herokuapp.com/usuarios/cadastrar', usuario)
}
entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{ 
  return this.http.post<UsuarioLogin>('https://ecommercegrupo6.herokuapp.com/usuarios/logar',usuarioLogin)


}
}