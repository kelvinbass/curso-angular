import { Component, OnInit } from '@angular/core';

import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[];

  estaCarregando: boolean;
  erroNoCarregamento: boolean;
  
  constructor( 
    private extratoService: ExtratoService
  ) {}

  ngOnInit() {
    this.estaCarregando = true;
    this.extratoService.getTransacoes()
      .subscribe(
        response => {
        this.estaCarregando = false;
        this.transacoes = response;
      },
       error => {
        this.erroNoCarregamento = true;
        this.estaCarregando = false;
      });
  }

}
