import { Component } from '@angular/core';
import { DADOS } from 'src/app/mock-transacoes';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-card-transacoes',
  templateUrl: './card-transacoes.component.html',
  styleUrls: ['./card-transacoes.component.scss']
})
export class CardTransacoesComponent {
  dadosTransacao = DADOS;
}
