import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaCategorias: Categoria[]
  listaProdutos: Produto[]

  idProduto: number

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua sessão expirou!')
      this.router.navigate(['/login'])
    }
  }

  // CATEGORIAS
  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      // console.log(this.listaCategorias)
    })
  }

  // PRODUTOS
  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }

  findProdutosById(){
    this.produtoService.getProdutosById(this.idProduto)
  }

}
