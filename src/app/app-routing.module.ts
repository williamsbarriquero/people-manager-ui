import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriaPessoaComponent } from './cria-pessoa/cria-pessoa.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { AtualizaPessoaComponent } from './atualiza-pessoa/atualiza-pessoa.component';

const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'people', component: ListaPessoasComponent },
  { path: 'add', component: CriaPessoaComponent },
  { path: 'update/:id', component: AtualizaPessoaComponent },
  { path: 'details/:id', component: PessoaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
