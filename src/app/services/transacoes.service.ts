import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private firestore: Firestore) { }

  obterTransacoes() {
    const transacoes = collection(this.firestore, 'transacoes');
    return collectionData(transacoes, {idField:'idTransacao'});
  }

  novaTransacao(transacao: Transacoes) {
    const transacoes = collection(this.firestore, 'transacoes');
    addDoc(transacoes, transacao)
      this.obterTransacoes();
  }


}
