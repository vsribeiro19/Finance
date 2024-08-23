import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { Firestore, collection, addDoc, collectionData, DocumentReference } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { doc, getDocs, updateDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  db = getFirestore();
  ref = collection(this.db, 'transacoes');
  snapShot = getDocs(this.ref);

  constructor(private firestore: Firestore) { }

  obterTransacaoPeloId(idTransacao: string) {
    this.snapShot.then((response) => {
      response.forEach((r) => {
        idTransacao = r.id;
      })
    })
  }

  obterTransacoes(): Observable<any> {
    const transacoes = collection(this.firestore, 'transacoes');
    console.log('transações', transacoes);
    return collectionData(transacoes);
  }

  novaTransacao(transacao: Transacoes) {
    return from(addDoc(this.ref, transacao));
  }

  editarTransacao(transacao: Transacoes, idTransacao: any) {
    updateDoc(doc(this.firestore, 'transacoes'), idTransacao, {
      nomeTransacao: transacao.nomeTransacao,
      tipoCompra: transacao.tipoCompra,
      status: transacao.status,
      formaPagamento: transacao.formaPagamento,
      valor: transacao.valor
    });

  }


}
