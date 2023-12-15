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
  formValorTransacao = new FormControl();

  transacoes?: Transacoes;
  submitted: boolean = false;
  valor = 0.00;
  nomeTransacao = '';
  tipoCompra = '';
  status = '';
  formaPagamento = '';

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

    const sucesso = () => {
      this.toastr.success('A transação foi criada com sucesso!');
    }

    const falha = () => {
      this.toastr.error('Houve um problema ao criar a transação');
    }
    this.transacoesService.novaTransacao({
      valor: formValue.valor,
      nomeTransacao: formValue.nomeTransacao,
      tipoCompra: formValue.tipoCompra,
      status: formValue.status,
      formaPagamento: formValue.formaPagamento
    }).subscribe(sucesso, falha);
    this.obterTransacoes();
  }

}
