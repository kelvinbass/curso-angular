import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ExercicioContadorComponent } from './shared/components/exercicio-contador/exercicio-contador.component';
import { ExercicioDataBidingComponent } from './shared/components/exercicio-data-biding/exercicio-data-biding.component';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExerciciosPipesComponent } from './shared/components/exercicios-pipes/exercicios-pipes.component';
import { ExericioNgclassComponent } from './shared/components/exericio-ngclass/exericio-ngclass.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';


registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExercicioDataBidingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExericioNgclassComponent,
    ExerciciosPipesComponent,
    ExtratoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
