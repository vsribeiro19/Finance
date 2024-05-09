import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from 'src/app/models/transacoes.model';
import { TransacoesService } from 'src/app/services/transacoes.service';

@Component({
  selector: 'app-card-fatura-atual',
  templateUrl: './card-fatura-atual.component.html',
  styleUrls: ['./card-fatura-atual.component.scss']
})
export class CardFaturaAtualComponent {
  qtdTransacoes = [];
  transacoes?: Observable<Transacoes[]>;
  total = 0;
  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.verificaQtdTransacoes();
  }

  verificaQtdTransacoes() {
    this.transacoesService.obterTransacoes().subscribe((parameters: any) => {
      this.qtdTransacoes = parameters;
      this.obterSomaTransacoes(this.qtdTransacoes);
    });
    return this.qtdTransacoes;
  }

  somaTransacoes(total: any, item: any) {
    return total + (item.valor);
  }

  obterSomaTransacoes(transacoes: any) {
    this.total = transacoes.reduce(this.somaTransacoes, 0);
  }
}

