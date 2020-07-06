import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;

  constructor(private pessoaService: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.pessoas = this.pessoaService.getListaPessoas();
  }

  removePessoa(id: number) {
    this.pessoaService.removePessoa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  detalhePessoa(id: number){
    this.router.navigate(['details', id]);
  }

  atualizaPessoa(id: number){
    this.router.navigate(['update', id]);
  }
}
