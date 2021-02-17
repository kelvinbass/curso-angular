import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent {

  @Input() valor = 10;
  @Output() valorMudou = new EventEmitter();

  incrementar() {
    this.valor = this.valor +1;
    this.valorMudou.emit();
  }

  decrementar() {
    this.valor = this.valor -1;
    this.valorMudou.emit(this.valor);
  }
}
