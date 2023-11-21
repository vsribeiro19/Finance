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
      apiKey: "AIzaSyD0oypSkZtZ7FsjlCoaEvIH5F9SqqQNoPo",
      authDomain: "fy-nance.firebaseapp.com",
      projectId: "fy-nance",
      storageBucket: "fy-nance.appspot.com",
      messagingSenderId: "542073053146",
      appId: "1:542073053146:web:76f8ee2ebbd3c92972aae3",
      measurementId: "G-KCLFRY9JDB"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
