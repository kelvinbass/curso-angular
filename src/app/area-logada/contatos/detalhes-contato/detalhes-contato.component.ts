import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interface';
import { ContatoService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato: Contato;
  estaCarregando: boolean;
  erroNoCarregamento: boolean;

  constructor(
    private route: ActivatedRoute, // service para linkar rotas alternativas
    private router: Router,
    private ContatosService: ContatoService,
  ) { }

  ngOnInit() {
    this.carregarContato();
    }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
    
    const idContato = this.route.snapshot.paramMap.get('id'); //de acordo com o roteamento
    this.ContatosService.getContato(idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccess(response),
        error => this.onError(error)
      );
  }
  
  onSuccess(response: Contato) {
    this.contato = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
  }

  voltar() {
    this.router.navigate(['contatos']);
    
  }
}

