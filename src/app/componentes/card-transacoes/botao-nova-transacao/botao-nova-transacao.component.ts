import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Transacoes } from 'src/app/models/transacoes.model';
import { TransacoesService } from 'src/app/services/transacoes.service';

@Component({
  selector: 'app-botao-nova-transacao',
  templateUrl: './botao-nova-transacao.component.html',
  styleUrls: ['./botao-nova-transacao.component.scss']
})
export class BotaoNovaTransacaoComponent implements OnInit {

  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.obterTransacoes();
  }

  formValorTransacao = new FormControl();
  transacoes$ = new Observable<Transacoes[]>();

  idTransacao = 0;
  valor = 0.00;
  nomeTransacao = '';
  tipoCompra = '';
  status = '';
  formaPagamento = '';

  obterTransacoes() {
    let getTransacoes =  this.transacoesService.obterTransacoes();
    console.log('teste', getTransacoes);
    return getTransacoes;
  }

  // novaTransacao(transacao: any) {
  //   this.transacoes = transacao;
  //   this.transacoesService.novaTransacao(this.transacoes).subscribe(() => {
  //     this.toastr.success('Transação criada com sucesso!');
  //   }, (error: any) => {
  //     console.error(error);
  //     this.toastr.error('Falha ao criar nova transação!');
  //   });
  // }

  novaTransacao() {
    if (!this.nomeTransacao || !this.valor) return;
    this.transacoesService.novaTransacao({ idTransacao: this.idTransacao, valor: this.valor, nomeTransacao: this.nomeTransacao, tipoCompra: this.tipoCompra, status: this.status, formaPagamento: this.formaPagamento })
  }

}
