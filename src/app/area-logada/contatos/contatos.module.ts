import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos.routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';



@NgModule({
  declarations: [
    DetalhesContatoComponent,
    NovoContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContatosModule { }