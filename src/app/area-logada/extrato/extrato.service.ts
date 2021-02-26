import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL; //variavel criada no app/environments

  constructor(
    private http: HttpClient,
  ) { }

  getTransacoes(page: number) {
   return this.http.get<Transacao[]>(this.API_URL + '/transacoes', { 
     params: {  // forma para paginar dados
      _page: String(page),
    }
   }); 
  }
}