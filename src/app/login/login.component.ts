import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef; //referencia ao elemento
  @ViewChild('passwordInput') passwordInput: ElementRef;

  email: string;
  password: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid){
      this.emailInput.nativeElement.focus();
      return
    }

      if(form.controls.password.invalid){
      this.passwordInput.nativeElement.focus();
      return
    }
    
      return;
    }
  }

  exibeErro(nomeControle: string, form: FormGroup) { //função generica para login (email e passoword)
    if (!form.controls[nomeControle]) {
      return false;
    }
    
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched
  }

}
