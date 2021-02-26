import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratoComponent } from './extrato.component';
import { ExtratoRoutingModule } from './extrato.routing.module';




@NgModule({
  declarations: [
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    ExtratoRoutingModule
  ]
})
export class ExtratoModule { }
