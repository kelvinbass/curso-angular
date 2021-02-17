import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-biding',
  templateUrl: './exercicio-data-biding.component.html',
  styleUrls: ['./exercicio-data-biding.component.scss']
})
export class ExercicioDataBidingComponent implements OnInit {
  
  valorAtual: string = '';

  @Output() clicado = new EventEmitter();
  
  botaoClicado() {
    alert('Clicou!')
  }

  onClickBotaoEmissor($event) {
    this.clicado.emit($event);
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> event.target).value;
  }

 imageURL = 'https://okawalivros.com.br/wp-content/uploads/2017/06/historia-de-lobos-okawalivros-1080x675.jpg'

  ngOnInit(): void {
  }

  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event)
  }
  
  onValorAtualizadoNoContador(novoValor){
    console.log('onValorAtualizadoNoContador: ', novoValor)
  }
}
