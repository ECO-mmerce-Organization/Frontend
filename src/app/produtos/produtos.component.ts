import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  listaOngsId: number[] = [0]
  listaOngsTest: Usuario[]

  inputFiltro: string

  checkboxx = document.getElementById('1') as HTMLInputElement | null;
  checkboxx2 = document.getElementById('2') as HTMLInputElement | null;

  produto: Produto = new Produto
  categoria: Categoria = new Categoria

  idProduto: number
  idCategoria: number

  //FILTRAR POR VALOR
  precoInicio: number = 0
  precoFinal: number
  listaProdutosPreco: Produto[]


  //VAR PAGINATION
  p: number = 1;

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private usuarioService: AuthService,
    private router: Router,
    private alertsService: AlertsService,
    private toastrService: ToastrService
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

  addOng(idOng: any) {

    this.listaOngs.map(function (e) { return e.id })

    let existe = this.listaOngsId.indexOf(idOng) >= 0

    console.log(existe)
    if (!existe) {
      this.listaOngsId.push(idOng); //ESTAMOS PEGANDO OS OBJ USUARIO DO TIPO ONG SELECIONADOS
      this.listaOngs.slice(0, this.listaOngs.length)
      this.listaOngs.push(idOng)
      this.listaProdutos.push(idOng)
      console.log(idOng)

    }

    console.log(idOng)
    console.log('ID DA ONG ACIMA')
    console.log('LISTA DE ONGS SELECIONADAS' + this.listaOngsId)

  }

  filtrarOng() {
    let listaOngsId = this.listaOngs.map(function (e) { return e.id })
    // this.listaOngss = this.listaOngs.map(function (e) { return e.id })

    for(let i = 0; i < this.listaOngsId.length; i++){
      this.listaOngs.map(function (e) { return e.id })
      
      console.log (listaOngsId[i])
    }

    for(let i = 0; i < this.listaOngsId.length; i++){
      
    }



    console.log(listaOngsId)

    // this.listaOngs.push

  }
  //=========================== FIM ===========================

  // CATEGORIAS
  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
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
      this.toastrService.success('', 'Filtro aplicado com sucesso!', {
        timeOut: 2200,
        progressBar: true,
        closeButton: true,
        positionClass: 'toast-bottom-right'
      })

    }, erro => {
      if (erro.status == 404 || erro.status == 400) {
        this.toastrService.error('', 'Produto não encontrado', {
          timeOut: 2200,
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        })
      }
    })
  }

  clearFiltro() {
    let precoFinalx: number
    let precoIniciox: number
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      this.precoFinal = precoFinalx
      this.precoInicio = precoIniciox
    })
  }


  //Filtrar por ONGs

  categoria2() {
    this.cat2 = true
  }

  categoria1() {
    this.cat1 = true
  }
  //=========================== FIM ===========================
}