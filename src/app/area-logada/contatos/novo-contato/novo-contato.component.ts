import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ContatoService } from '../contatos.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit {

  contatoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      banco: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.get(nomeControle)) {
      return false;
    }

    return this.contatoForm.get(nomeControle).invalid && this.contatoForm.get(nomeControle).touched;
  }

  validateAllFormFields() {
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      control.markAsTouched();
    }) //função para validar vaios campos so mesmo tempo
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validateAllFormFields();
      return;
    }
  
    this.salvarContato();
  }
    
  salvarContato() {
    this.contatoForm.value
      this.contatoService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessSalvarContato(),
        error => this.onErrorSalvarContato(),
      )
    }  

    onSuccessSalvarContato(){
      alert('Deu bom, contato salvo com sucesso!');
      this.router.navigate(['contatos']);
    }

    onErrorSalvarContato() {
      alert('Deu ruim, salvou não pai!');
    }
}


