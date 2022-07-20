import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarioLogin: UsuarioLogin = new UsuarioLogin

  constructor
    (private auth: AuthService,
      private router: Router,
      private toastrService: ToastrService
    ) {

  }

  ngOnInit() {
    window.scroll(0, 0)
  }

  logar() {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.usuarioLogin = resp
      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id
      environment.ong = this.usuarioLogin.ong

      this.router.navigate(['/home'])

      this.toastrService.success('Logado com sucesso!', 'Login Efetuado', {
        timeOut: 2200,
        progressBar: true,
        closeButton: true,
        positionClass: 'toast-bottom-right'
      })
  }, erro => {
  if (erro.status == 401) {
    this.toastrService.error('Usuario ou senha incorretos!', 'Login não efetuado', {
      timeOut: 2200,
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right'
    })
  }
})
  }

}
