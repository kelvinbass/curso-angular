import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, senha: string): Observable<LoginResponse> {
    // return this.http.post(this.API_URL + '/auth', contato, this.httpOptions);
    if(email === 'kelbass17@gmail.com' && senha === '123') {
    return of({
      usuario: {
        nome: 'Kelvin',
        sobrenome: 'Bass',
        email: 'kelbass17@gmail.com',
      },
      token: 'dsad1232saES1#@!#1ds11!'
    })
      .pipe(
        delay(2000),
        tap(response => { //guardar usuario
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
  }
      return timer(3000).pipe(
        mergeMap(() => throwError('Usúario ou senha incorretos'))
      );
  }
}
