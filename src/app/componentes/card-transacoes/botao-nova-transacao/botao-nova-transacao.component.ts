import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Transacoes } from 'src/app/models/transacoes.model';

@Component({
  selector: 'app-botao-nova-transacao',
  templateUrl: './botao-nova-transacao.component.html',
  styleUrls: ['./botao-nova-transacao.component.scss']
})
export class BotaoNovaTransacaoComponent {
  formValorTransacao = new FormControl();
  transacoes!: Transacoes;
  criarTransacao(f: any) {
    this.transacoes = f.value;
    this.transacoes =  this.formValorTransacao;
    console.log(this.transacoes);
    
  }
}
