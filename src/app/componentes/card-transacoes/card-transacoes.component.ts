import { Component, OnInit } from '@angular/core';
import { DADOS } from 'src/app/mock-transacoes';
@Component({
  selector: 'app-card-transacoes',
  templateUrl: './card-transacoes.component.html',
  styleUrls: ['./card-transacoes.component.scss']
})
export class CardTransacoesComponent implements OnInit {
  dadosTransacao = DADOS;

  constructor(){

  }

  ngOnInit(): void {
    
  }


  
  
}
