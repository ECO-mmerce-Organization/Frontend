import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  linkProduto = 'https://ecommercegrupo6.herokuapp.com/produtos'
  //linkProduto = 'http://localhost:8080/produtos'


  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token) //Estamos trazendo as configurações de HEADERS para essa váriavel
  }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.linkProduto + "/all", this.token)
  }

  getProdutosById(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.linkProduto + `/${id}`,  this.token)
  }

  getProdutosByValor(precoInicio:number, precoFim: number) : Observable<Produto[]> {
    return this.http.get<Produto[]>(this.linkProduto + `/valorinicial` + `/${precoInicio}` + `/valorfinal` + `/${precoFim}`)
  }

  postProdutos(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.linkProduto, produto, this.token)
  }

  putProdutos(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.linkProduto, produto, this.token)
  }

  deleteProdutos(id: number) {
    return this.http.delete<Produto>(this.linkProduto + `/${id}`, this.token)
  }

}
