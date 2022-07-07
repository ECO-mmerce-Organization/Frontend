import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuario: Usuario = new Usuario()
  confirmSenha: string
  ongUsuario: boolean
  fotoUsuario: string

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }
  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value //Estamos pegando o valor desse evento (do input) e gravando na variavel confirmSenha
  }

  tipoUser(event: any) {
    this.ongUsuario = event.target.value //Estamos pegando o valor do input e gravando na variavel OngUsuario
  }

  //Esse método se conecta com nosso auth.service e ele se conecta com nosso backend
  cadastrar() {
    this.usuario.ong = this.ongUsuario //Estamos definindo que o atributo do objeto usuario é = atributo OngUsuario criado nessa classe e populado pelo método.

    if (this.usuario.senha != this.confirmSenha) {
      alert('Senhas diferentes!')
    } else {

      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        //Esse subscribe transforma nossas informações em modelo JSON para ser enviados ao nosso BackEnd
        //A resp retorna as informações da nossa model

        this.usuario = resp
        this.router.navigate(['/login'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

}
