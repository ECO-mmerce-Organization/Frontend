import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
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
  listaOngs: Usuario[]

  //Filtros
  cat1: boolean = false
  cat2: boolean = false

  ong1: boolean = false
  ong2: boolean = false

  inputFiltro: string

  produto: Produto = new Produto
  categoria: Categoria = new Categoria

  idProduto: number
  idCategoria: number
  
  precoInicio: number
  precoFinal: number
  listaProdutosPreco: Produto[]


  //VAR PAGINATION
  p: number = 1;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private usuarioService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      // alert('Sua sessão expirou!')
      this.router.navigate(['/login'])
    }

    this.getAllProdutos()
    this.getAllOngs()
    this.getAllCategorias()
  }

  //USUARIOS
  getAllOngs() {
    this.usuarioService.getOngs().subscribe((resp: Usuario[]) => {
      this.listaOngs = resp
      console.log(this.listaOngs)
    })
  }
  //=========================== FIM ===========================

  // CATEGORIAS
  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      console.log(this.listaCategorias)
    })
  }
  //=========================== FIM ===========================
  // PRODUTOS
  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  findProdutosById() {
    this.produtoService.getProdutosById(this.idProduto)
  }

  postProduto() {
    this.produtoService.postProdutos(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
  //=========================== FIM ===========================

  //FILTROS
  findProdutosByPreco() {
    this.produtoService.getProdutosByValor(this.precoFinal).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
    })
  }

  filtrar() {
  }

  categoria2() {
    this.cat2 = true
  }

  categoria1() {
    this.cat1 = true
  }
  //=========================== FIM ===========================
}