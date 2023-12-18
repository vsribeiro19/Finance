import { Observable } from 'rxjs';
import { Component, OnInit,Inject, LOCALE_ID } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Transacoes } from 'src/app/models/transacoes.model';
import { TransacoesService } from 'src/app/services/transacoes.service';
import { ToastrService } from 'ngx-toastr';
import { DecimalPipe,formatNumber } from '@angular/common';

@Component({
  selector: 'app-botao-nova-transacao',
  templateUrl: './botao-nova-transacao.component.html',
  styleUrls: ['./botao-nova-transacao.component.scss']
})
export class BotaoNovaTransacaoComponent implements OnInit {
  criarTransacaoGroup!: FormGroup;
  formValorTransacao = new FormControl();

  transacoes?: Transacoes;
  submitted: boolean = false;
  valor: number = 0.00;
  nomeTransacao = '';
  tipoCompra = '';
  status = '';
  formaPagamento = '';

  constructor(private transacoesService: TransacoesService, private toastr: ToastrService, private fb: FormBuilder,@Inject(LOCALE_ID) private locale: string) {
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

  obterTransacoes() {
    let getTransacoes = this.transacoesService.obterTransacoes().subscribe((parameters: any) => {
      this.transacoes = parameters;
    });

    return getTransacoes;
  }

  novaTransacao() {
    if (this.criarTransacaoGroup.invalid) {
      return;
    }
    const formValue = this.criarTransacaoGroup.value;
    let valorInput = formatNumber(formValue.valor,this.locale,'1.2-2');

    const sucesso = () => {
      this.toastr.success('A transação foi criada com sucesso!');
    }

    const falha = () => {
      this.toastr.error('Houve um problema ao criar a transação');
    }
    this.transacoesService.novaTransacao({
      valor: valorInput,
      nomeTransacao: formValue.nomeTransacao,
      tipoCompra: formValue.tipoCompra,
      status: formValue.status,
      formaPagamento: formValue.formaPagamento
    }).subscribe(sucesso, falha);
    this.obterTransacoes();
  }

}
