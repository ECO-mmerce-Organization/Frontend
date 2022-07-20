import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutosComponent } from '../produtos/produtos.component';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  produto: Produto = new Produto
  
  nomePost: string
  listaProdutos: Produto[]
  produtos: ProdutosComponent

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      console.log(this.listaProdutos)
    })
  }
}