import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[]; //array criado atraves da extrato.interface

  estaCarregando: boolean;
  erroNoCarregamento: boolean;
  page = 1;
  
  
  constructor(private extratoService: ExtratoService,
  private router: Router,) { }

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;

    const page = 1;

    this.extratoService.getTransacoes(this.page) // paginar dados
      .pipe(
        take(1), // resolve o problema de meromy link apos o subscribe ele finaliza a escuta do observable 
        finalize(() => this.estaCarregando = false) //operador para simplificar a função onSuccess e onError 
      )
      .subscribe( //necessario esse termo para que possa finalizar a chamada HTTP
        response => this.onSuccess(response),
       error => this.onError(error));
  }


  onSuccess(response: Transacao[]) {
    this.transacoes = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    };
    
  paginaAnterior() {
    this.page --;
    this.carregarExtrato();
  }

  proximaPagina() {
    this.page ++;
    this.carregarExtrato();
  }
}
