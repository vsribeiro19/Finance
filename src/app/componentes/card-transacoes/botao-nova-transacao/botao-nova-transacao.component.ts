
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  // valor = new FormControl();

  transacoes?: Transacoes;

  constructor(private transacoesService: TransacoesService, private toastr: ToastrService, private fb: FormBuilder) {
    this.criarTransacaoGroup = this.fb.group({
      nomeTransacao: ['', Validators.required],
      tipoCompra: ['Selecione', Validators.required],
      status: ['Selecione', Validators.required],
      formaPagamento: ['Selecione', Validators.required],
      valor: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  cancelar() {
    // this.criarTransacaoGroup.reset();
    this.criarTransacaoGroup = this.fb.group({
      nomeTransacao: '',
      tipoCompra: 'Selecione',
      status: 'Selecione',
      formaPagamento: 'Selecione',
      valor: 0
    })
  }

  novaTransacao() {
    const formValue = this.criarTransacaoGroup.value;

    if (this.criarTransacaoGroup.invalid) {
      console.log('erro', this.criarTransacaoGroup);
      this.toastr.error('Não foi possível salvar, tente novamente.');
      return;
    }

    if (this.criarTransacaoGroup.valid) {
      this.toastr.success('A transação foi criada com sucesso!');
      this.transacoesService.novaTransacao({
        nomeTransacao: formValue.nomeTransacao,
        tipoCompra: formValue.tipoCompra,
        status: formValue.status,
        formaPagamento: formValue.formaPagamento,
        valor: formValue.valor,
      });
      this.criarTransacaoGroup.reset();
    }
  }

}
