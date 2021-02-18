import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ExercicioDataBidingComponent } from './exercicio-data-biding/exercicio-data-biding.component';
import { ExercicioContadorComponent } from './exercicio-contador/exercicio-contador.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';
import { ExericioNgclassComponent } from './exericio-ngclass/exericio-ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBidingComponent,
    ExercicioContadorComponent,
    ExercicioDiretivasComponent,
    ExericioNgclassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
