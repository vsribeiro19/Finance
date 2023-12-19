import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { Firestore, collection, addDoc, collectionData, DocumentReference } from '@angular/fire/firestore';
import { Observable, catchError, from, map, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private firestore: Firestore) { }

  obterTransacoes():Observable<any> {
    const transacoes = collection(this.firestore, 'transacoes');
    return collectionData(transacoes);
  }

  novaTransacao(transacao: Transacoes): Observable<Transacoes> {
    const transacoes = collection(this.firestore, 'transacoes');
    return from(addDoc(transacoes, transacao)).pipe(
      map((docRef: DocumentReference) => {
        tap(console.log)
        const idTransacao = docRef.id;
        return { ...transacao, idTransacao } as Transacoes;
      }),
      catchError(error => {
        console.error('Erro ao adicionar transação:', error);
        throw error;
      })
    );
  }


}
