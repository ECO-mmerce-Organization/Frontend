import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FundadoresComponent } from './fundadores/fundadores.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},

  {path: 'cadastrarProduto', component: CadastrarProdutoComponent},
  {path: 'atualizarProduto', component: AtualizarProdutoComponent},
  
  {path: 'cadastrarCategoria', component: CadastrarCategoriaComponent},

  {path: 'fundadores', component: FundadoresComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
