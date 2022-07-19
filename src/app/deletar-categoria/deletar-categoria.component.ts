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
  listaCategorias: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.getAllCategorias()
  }

  findCategoriaById(id: number) {
    this.categoriaService.getCategoriasById(id).subscribe((resp: Categoria) => {
      alert('Categoria apagada com sucesso!')
    })
  }

  deletarCategoria(id: number) {
    this.categoriaService.deleteCategoria(id).subscribe(() => {
      alert('Apagado')
      this.getAllCategorias()
    })
  }

  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      console.log (this.listaCategorias)
    })
  }
}
