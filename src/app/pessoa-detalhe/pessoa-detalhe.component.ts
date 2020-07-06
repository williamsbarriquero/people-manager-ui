import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { hiddenEndereco } from '../util/hiddenEndereco';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit {

  id: number;
  pessoa: Pessoa;
  hidden = hiddenEndereco() === 1;

  constructor(private route: ActivatedRoute,private router: Router,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoa(this.id)
      .subscribe(data => {
        console.log(data)
        this.pessoa = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['people']);
  }

}
