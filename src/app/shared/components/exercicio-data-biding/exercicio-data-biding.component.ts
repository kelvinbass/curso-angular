import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-biding',
  templateUrl: './exercicio-data-biding.component.html',
  styleUrls: ['./exercicio-data-biding.component.scss']
})
export class ExercicioDataBidingComponent {
  
  valorAtual: string = '';
  
  imageURL = 'https://okawalivros.com.br/wp-content/uploads/2017/06/historia-de-lobos-okawalivros-1080x675.jpg'
  
  @Output() clicado = new EventEmitter();

  valorContador = 10;
  
  botaoClicado() {
    alert('Clicou!')
  }

  onClickBotaoEmissor($event) {
    this.clicado.emit($event);
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> event.target).value;
  }


  eventoRecebido($event) {
    console.log('AppComponent: EVENTO RECEBIDO!', $event)
  }
  
  onValorAtualizadoNoContador(novoValor:any){
    this.valorContador = novoValor;
    console.log('onValorAtualizadoNoContador: ', novoValor)
  }
}
