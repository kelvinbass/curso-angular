import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  carrosLista = [{
    placa: 'JND-7438',
    cor: 'Preto',
  }, {
    placa: 'BAD-6418',
    cor: 'Azul',
  }, {
    placa: 'NXX-1159',
    cor: 'Branco',
  }, {
    placa: 'POV-3722',
    cor: 'Vermelho',
  }];

  PREFIXO_IMAGEM_URL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';
  
  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;
    
  deveExibir = true

  trocarValor() {
    this.deveExibir = !this.deveExibir;  
  }

  soma(numero1, numero2) {
  return numero1 + numero2;


  
}

}
