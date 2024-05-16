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
  constructor() { }

  ngOnInit(): void {

  }
}
