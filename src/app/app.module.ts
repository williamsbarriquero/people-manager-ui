import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriaPessoaComponent } from './cria-pessoa/cria-pessoa.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { AtualizaPessoaComponent } from './atualiza-pessoa/atualiza-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    CriaPessoaComponent,
    PessoaDetalheComponent,
    ListaPessoasComponent,
    AtualizaPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
