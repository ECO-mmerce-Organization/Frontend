import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  linkCategoria = 'https://ecommercegrupo6.herokuapp.com/categorias'
  //linkCategoria = 'http://localhost:8080/categorias'

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token) //Estamos trazendo as configurações de HEADERS para essa váriavel
  }

  getAllCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.linkCategoria, this.token)
  }

  getCategoriasById(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(this.linkCategoria + `/${id}`, this.token)
  }

  postCategoria (categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.linkCategoria, categoria, this.token)
  } 
}
