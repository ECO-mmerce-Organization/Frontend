import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.css']
})
export class AtualizarProdutoComponent implements OnInit {
  produto: Produto = new Produto
  categoria: Categoria = new Categoria
  idCategoria: number
  listaCategoria : Categoria[]
  


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService


  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }
  atualizar() {
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria


    this.produtoService.putProdutos(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      alert('Produto atualizado com sucesso!')
    })

  }

}
