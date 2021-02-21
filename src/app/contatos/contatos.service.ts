import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contato } from './contatos.interface';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  API_URL2 = environment.API_URL; //variavel criada no app/environments

  constructor(
    private http: HttpClient,
  ) { }

  getContato(page: number) {
   return this.http.get<Contato[]>(this.API_URL2 + '/contatos', { 
     params: {  // forma para paginar dados
      _page: String(page),
    }
   }); 
  }
}