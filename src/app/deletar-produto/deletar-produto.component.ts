import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  produto: Produto = new Produto
  idProduto: number

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.idProduto = this.route.snapshot.params['id']
    this.findProdutoById(this.idProduto)
  }

  apagar() {
    this.produtoService.deleteProdutos(this.idProduto).subscribe(() => {
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/produto'])

    })

  }

  findProdutoById(id: number) {
    this.produtoService.getProdutosById(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

}
