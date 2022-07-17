import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AlertsService } from '../service/alerts.service';
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

  //FILTRAR POR VALOR
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
    private alertsService: AlertsService
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

  //Filtrar por intervado de valor
  findProdutosByPreco() {
    this.produtoService.getProdutosByValor(this.precoInicio, this.precoFinal).subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      this.alertsService.showAlertSuccess('OK')
    }, erro => {
      if (erro.status == 404) {
        this.alertsService.showAlertDanger('Lista vazia')
      }
      if (erro.status == 400) {
        this.alertsService.showAlertDanger('Requisição Inválida')
      }
    })
  }

  clearFiltro() {
    let precoFinalx: number
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      this.precoFinal = precoFinalx
      this.precoInicio = 0
    })
  }


  //Filtrar por ONGs
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