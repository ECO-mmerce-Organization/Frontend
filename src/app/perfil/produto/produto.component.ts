import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  idUser = environment.id
  user: Usuario = new Usuario()
  listaCategorias: Categoria[]


  //VAR PAGINATION
  p: number = 1;

  constructor(
    private authService: AuthService,
    private categoriaService: CategoriaService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    this.getByUserId()
    this.getAllCategorias()
  }

  getByUserId() {
    this.authService.getUserById(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  getAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
      console.log(this.listaCategorias)
    })
  }

}