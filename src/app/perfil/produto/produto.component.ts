import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
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

  //VAR PAGINATION
  p: number = 1;

  constructor(
    private authService : AuthService,


  ) { }

  ngOnInit() {
    this.getByUserId()

  }
  getByUserId(){
    this.authService.getUserById(this.idUser).subscribe((resp: Usuario)=>{
      this.user = resp
    })
  }

}
