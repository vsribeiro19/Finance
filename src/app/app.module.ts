import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { CardFaturasComponent } from './componentes/card-faturas/card-faturas.component';
import { CardTransacoesComponent } from './componentes/card-transacoes/card-transacoes.component';
import { BotaoNovaTransacaoComponent } from './componentes/card-transacoes/botao-nova-transacao/botao-nova-transacao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    CardFaturasComponent,
    CardTransacoesComponent,
    BotaoNovaTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurrencyMaskModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDaaL_8chTmePICe53lXAROU_M9szUPIog",
      authDomain: "fy-nances.firebaseapp.com",
      projectId: "fy-nances",
      storageBucket: "fy-nances.appspot.com",
      messagingSenderId: "617745917017",
      appId: "1:617745917017:web:d0ac0d543e6a8f4d88bd48",
      measurementId: "G-Z4RD1EELNN"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
