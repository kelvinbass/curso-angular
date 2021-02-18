import { Component } from '@angular/core';

import { COMPRAS } from './constant-pipes'

@Component({
  selector: 'app-exercicios-pipes',
  templateUrl: './exercicios-pipes.component.html',
  styleUrls: ['./exercicios-pipes.component.scss']
})
export class ExerciciosPipesComponent {
  
  filme = {
    titulo: 'Harry Potter e a pedra filosofal',
    estrelas: 4.456456456,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5, 30),
  };

  COMPRAS = COMPRAS;
 
  
}

