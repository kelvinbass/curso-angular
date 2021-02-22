import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from './contatos.interface';
import { ContatoService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contato[];

  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private contatosService: ContatoService,
    private router: Router, //service para poder prover essa navegação
    ) { }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatosService.getContatos() // paginar dados
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe( //necessario esse termo para que possa finalizar a chamada HTTP
          
        response => this.onSuccess(response),
       error => this.onError(error));
  }


  onSuccess(response: Contato[]) {
    this.contatos = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
  }

  irParaDetalhes(idContato: string) {
    this.router.navigate(['contatos/' + idContato])
  }
  
}


