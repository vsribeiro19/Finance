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

  idTransacao = 0;
  valor = 0.00;
  nomeTransacao = '';
  tipoCompra = '';
  status = '';
  formaPagamento = '';

  obterTransacoes() {
    let getTransacoes = this.transacoesService.obterTransacoes();
    return getTransacoes;
  }
  novaTransacao() {
    if (this.criarTransacaoGroup.invalid) {
      return;
    }
    const formValue = this.criarTransacaoGroup.value;
    const sucesso = () => {
      console.log(this.toastr);
      this.toastr.success('A transação foi criada com sucesso!');
    }

    const falha = () => {
      console.log('faio');
      this.toastr.error('Houve um problema ao criar a transação');
    }
    this.transacoesService.novaTransacao({
      valor: formValue.valor,
      nomeTransacao: formValue.nomeTransacao,
      tipoCompra: formValue.tipoCompra,
      status: formValue.status,
      formaPagamento: formValue.formaPagamento
    }).subscribe(sucesso, falha);
  }

}
