import { NgModule, isDevMode } from '@angular/core';
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
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideFirebaseApp,getApp,initializeApp } from '@angular/fire/app';
import { getFirestore } from 'firebase/firestore';
import { provideFirestore } from '@angular/fire/firestore';
import { TransacoesService } from './services/transacoes.service';
import { environment } from 'src/environments/environment';
import { ToastrModule } from 'ngx-toastr';

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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireDatabaseModule,
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [TransacoesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
