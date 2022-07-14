import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(
    private authService : AuthService,
    private router:Router


  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou!')
      this.router.navigate(['/login'])
    }

    this.getByUserId()

  }
  getByUserId(){
    this.authService.getUserById(this.idUser).subscribe((resp: Usuario)=>{
      this.user = resp
    })
  }

}
