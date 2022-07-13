import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { OngsComponent } from './ongs/ongs.component';
import { SobreComponent } from './sobre/sobre.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { FundadoresComponent } from './fundadores/fundadores.component';
import { CadastrarCategoriaComponent } from './cadastrar-categoria/cadastrar-categoria.component';
import { AtualizarCategoriaComponent } from './atualizar-categoria/atualizar-categoria.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { DeletarCategoriaComponent } from './deletar-categoria/deletar-categoria.component';
import { ProdutoComponent } from './perfil/produto/produto.component';
import { TokenInterceptorService } from './service/token-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastrarComponent,
    HomeComponent,
    ProdutosComponent,
    OngsComponent,
    SobreComponent,
    CadastrarProdutoComponent,
    AtualizarProdutoComponent,
    FundadoresComponent,
    CadastrarCategoriaComponent,
    AtualizarCategoriaComponent,
    DeletarProdutoComponent,
    DeletarCategoriaComponent,
    ProdutoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
