import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosComponent } from './contatos.component';
import { ContatosRoutingModule } from './contatos.routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';



@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
  ]
})
export class ContatosModule { }