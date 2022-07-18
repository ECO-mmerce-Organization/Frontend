import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-deletar-categoria',
  templateUrl: './deletar-categoria.component.html',
  styleUrls: ['./deletar-categoria.component.css']
})
export class DeletarCategoriaComponent implements OnInit {

  categoria = new Categoria
  idCategoria: number
  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.idCategoria = this.route.snapshot.params['id']
    this.findCategoriaById(this.idCategoria)
  }

  findCategoriaById(id: number) {
    this.categoriaService.getCategoriasById(id).subscribe((resp: Categoria) => {
      alert('Categoria apagada com sucesso!')
    })
  }

  deletarCategoria() {
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(() => {
    })
  }

}
