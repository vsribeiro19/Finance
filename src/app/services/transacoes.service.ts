import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { Firestore, collection, addDoc, collectionData, DocumentReference } from '@angular/fire/firestore';
import { Observable, catchError, from, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private firestore: Firestore) { }

  obterTransacoes() {
    const transacoes = collection(this.firestore, 'transacoes');
    return collectionData(transacoes);
  }

  novaTransacao(transacao: Transacoes): Observable<Transacoes> {
    const transacoes = collection(this.firestore, 'transacoes');
    return from(addDoc(transacoes, transacao)).pipe(
      map((docRef: DocumentReference) => {
        const idTransacao = docRef.id;
        console.log('id', idTransacao);

        return { ...transacao, idTransacao } as Transacoes;
      }),
      catchError(error => {
        console.error('Erro ao adicionar transação:', error);
        throw error;
      })
    );
  }


}
