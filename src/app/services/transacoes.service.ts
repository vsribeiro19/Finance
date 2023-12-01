import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private db: AngularFireDatabase) { }

  listarTodasTransacoes() {
    return this.db.list('transacao').snapshotChanges().pipe(
      map(changes => {
        // return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    )
  }

  listarTransacoesPorId(id: Transacoes) {

  }

  novaTransacao(transacao: Transacoes) {
    this.db.list('transacao').push(transacao).then((result: any) => {

    })
  }

  editarTransacao(id: Transacoes) {

  }

  excluirTransacao(id: Transacoes) {

  }
}
