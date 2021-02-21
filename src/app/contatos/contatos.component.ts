import { Component, OnInit } from '@angular/core';
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
  page = 1;


  constructor( private contatosService: ContatoService) { }

  ngOnInit(): void {
    this.carregarContato();
  }

  carregarContato() {
    this.estaCarregando = true;

    const page = 1;

    this.contatosService.getContato(this.page) // paginar dados
      .pipe(
        take(1), // resolve o problema de meromy link apos o subscribe ele finaliza a escuta do observable 
        finalize(() => this.estaCarregando = false) //operador para simplificar a função onSuccess e onError 
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
    };
    
  paginaAnterior() {
    this.page --;
    this.carregarContato();
  }

  proximaPagina() {
    this.page ++;
    this.carregarContato();
  }
}


