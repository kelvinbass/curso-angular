import { Component } from '@angular/core';

@Component({
  selector: 'app-exericio-ngclass',
  templateUrl: './exericio-ngclass.component.html',
  styleUrls: ['./exericio-ngclass.component.scss']
})
export class ExericioNgclassComponent {

  deveSerVerde = false;

  tornarVerde() {
    this.deveSerVerde = true;
  }

}
