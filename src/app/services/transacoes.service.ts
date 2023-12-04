import { Observable } from 'rxjs';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private firestore: Firestore, private toastr: ToastrService) { }

  // novaTransacao(transacao: Transacoes) {
  //   const transacoesIntance = collection(this.firestore, 'transacao');
  //   return addDoc(transacoesIntance, transacao);
  // }

  obterTransacoes() {
    const transacoes = collection(this.firestore, 'transacoes');
    collectionData(transacoes).subscribe(val => {
      console.log('Transações', val);
    })
  }

  novaTransacao(transacao: Transacoes) {
    const transacoes = collection(this.firestore, 'transacoes');
    addDoc(transacoes, transacao).then(() => {
      this.toastr.success('Transação criada com sucesso!');
      this.obterTransacoes();
    }).catch((err) => {
      console.log(err);
      this.toastr.error('Houve um erro ao criar a transação!');
    })
  }


}
