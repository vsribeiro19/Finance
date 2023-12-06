import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Transacoes } from 'src/app/models/transacoes.model';
import { TransacoesService } from 'src/app/services/transacoes.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-botao-nova-transacao',
  templateUrl: './botao-nova-transacao.component.html',
  styleUrls: ['./botao-nova-transacao.component.scss']
})
export class BotaoNovaTransacaoComponent implements OnInit {
  criarTransacaoGroup!: FormGroup;
  submitted: boolean = false;

  constructor(private transacoesService: TransacoesService, private toastr: ToastrService, private fb: FormBuilder) {
    this.criarTransacaoGroup = this.fb.group({
      nomeTransacao: ['', Validators.required],
      tipoCompra: ['Selecione', Validators.required],
      status: ['Selecione', Validators.required],
      formaPagamento: ['Selecione', Validators.required],
      valor: ['', Validators.required]
    })
  }

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
    let getTransacoes = this.transacoesService.obterTransacoes();
    console.log('teste', getTransacoes);
    return getTransacoes;
  }

  novaTransacao() {
    console.log('transação realizada com sucesso', this.criarTransacaoGroup);

    // if (!this.nomeTransacao || !this.valor) return;
    // this.transacoesService.novaTransacao({
    //   idTransacao: this.idTransacao, valor: this.valor,
    //   nomeTransacao: this.nomeTransacao, tipoCompra: this.tipoCompra, status: this.status, formaPagamento: this.formaPagamento
    // })
  }

}
