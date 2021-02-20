import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExercicioContadorComponent } from './components/exercicio-contador/exercicio-contador.component';
import { ExercicioDataBidingComponent } from './components/exercicio-data-biding/exercicio-data-biding.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExerciciosPipesComponent } from './components/exercicios-pipes/exercicios-pipes.component';
import { ExericioNgclassComponent } from './components/exericio-ngclass/exericio-ngclass.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBidingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExericioNgclassComponent,
    ExerciciosPipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBidingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExericioNgclassComponent,
    ExerciciosPipesComponent,
  ],
})
export class SharedModule { }
