import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from 'src/app/models/transacoes.model';
import { TransacoesService } from 'src/app/services/transacoes.service';
@Component({
  selector: 'app-card-faturas',
  templateUrl: './card-faturas.component.html',
  styleUrls: ['./card-faturas.component.scss']
})
export class CardFaturasComponent implements OnInit {
  qtdTransacoes = [];
  transacoes?: Observable<Transacoes[]>;
  total = 0;
  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.transacoes = this.transacoesService.obterTransacoes();
    this.verificaQtdTransacoes();
  }

  verificaQtdTransacoes() {
    this.transacoesService.obterTransacoes().subscribe((parameters: any) => {
      this.qtdTransacoes = parameters;
      this.obterSomaTransacoes(this.qtdTransacoes);
    });
    return this.qtdTransacoes;
  }

  obterSomaTransacoes(transacoes: any) {
    this.total = transacoes.reduce(this.somaTransacoes, 0);
  }

  somaTransacoes(total: any, item: any) {
    return total + (item.valor);
  }
}
