import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Endereco } from '../endereco';

@Component({
  selector: 'app-atualiza-pessoa',
  templateUrl: './atualiza-pessoa.component.html',
  styleUrls: ['./atualiza-pessoa.component.css']
})
export class AtualizaPessoaComponent implements OnInit {

  id: number;
  pessoa: Pessoa;
  endereco: Endereco

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.endereco = new Endereco();

    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoa(this.id)
      .subscribe(data => {
        console.log(data)
        this.pessoa = data;
      }, error => console.log(error));
  }

  atualizaPessoa() {
    this.pessoa.endereco = this.endereco;
    this.pessoa.dataNascimento = moment(this.pessoa.dataNascimento).format('YYYY-MM-DD')

    this.pessoaService.atualizaPessoa(this.id, this.pessoa)
      .subscribe(data => console.log(data), error => console.log(error));
    this.pessoa = new Pessoa();
    this.gotoList();
  }

  onSubmit() {
    this.atualizaPessoa();
  }

  gotoList() {
    this.router.navigate(['/people']);
  }
}
