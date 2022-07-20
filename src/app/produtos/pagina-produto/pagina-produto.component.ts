import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  produto: Produto = new Produto
  categoria: Categoria = new Categoria

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    let id = this.route.snapshot.params['id']
    this.findProdutoById(id)
  }


  findProdutoById(id: number) {
    this.produtoService.getProdutosById(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }
}
