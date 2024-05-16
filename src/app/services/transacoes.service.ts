import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { Firestore, collection, addDoc, collectionData, DocumentReference } from '@angular/fire/firestore';
import { Observable, catchError, from, map, tap } from 'rxjs';
import { getDoc, getDocs } from 'firebase/firestore';
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
