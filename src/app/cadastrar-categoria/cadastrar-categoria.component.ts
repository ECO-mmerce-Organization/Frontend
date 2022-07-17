import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-cadastrar-categoria',
  templateUrl: './cadastrar-categoria.component.html',
  styleUrls: ['./cadastrar-categoria.component.css']
})
export class CadastrarCategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria
  listCategoria: Categoria[]

  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  postCategoria() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      alert('Categoria Criada com Sucesso!!')
      this.router.navigate(['/home'])
    })
  }

}
