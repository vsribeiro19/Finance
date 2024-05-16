import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TransacoesService } from 'src/app/services/transacoes.service';

@Component({
  selector: 'app-editar-transacao',
  templateUrl: './editar-transacao.component.html',
  styleUrls: ['./editar-transacao.component.scss']
})
export class EditarTransacaoComponent implements OnInit {
  editarTransacaoGroup!: FormGroup;

  constructor(private transacoesService: TransacoesService, private toastr: ToastrService, private fb: FormBuilder) {
    this.editarTransacaoGroup = this.fb.group({
      nomeTransacao: ['', Validators.required],
      tipoCompra: ['Selecione', Validators.required],
      status: ['Selecione', Validators.required],
      formaPagamento: ['Selecione', Validators.required],
      valor: [[Validators.required]]
    })
  }


  ngOnInit(): void {
    this.transacoesService.obterTransacoes().subscribe((respone) => {
      console.log(respone);
    })
  }

  editarTransacao(){
    
  }
}
