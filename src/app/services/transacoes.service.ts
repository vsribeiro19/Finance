import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Transacoes } from '../models/transacoes.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {Firestore,collection,addDoc} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private firestore: Firestore) { }

  novaTransacao(t: any){
    const transacoesIntance = collection(this.firestore, 'transacao');
    addDoc(transacoesIntance, t.value).then(() => {
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  
}
