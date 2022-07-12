import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  categoria : Categoria = new Categoria
  produto : Produto = new Produto
  usuario: Usuario = new Usuario

  listaCategorias : Categoria[]
  idCategoria: number
  idUser = environment.id

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.getAllCategorias()
  }

  // CATEGORIAS
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) =>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getCategoriasById(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  // PRODUTOS
  postProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario

    console.log(this.produto.categoria)
    console.log(this.produto.descricao)
    console.log(this.produto.foto)
    console.log(this.produto.id)
    console.log(this.produto.nomeProd)
    console.log(this.produto.preco)
    console.log(this.produto.usuario)

    this.produtoService.postProdutos(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
    })

  }

}
