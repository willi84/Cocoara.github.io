import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Practiques } from '../models/practiques';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {


  constructor(private firestore: AngularFirestore) { }

  checkAllowedUser(email: string): Observable<any[]>{
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref:any){
    return ref.where("email", "==", email);
  }

  getPractiques(): Observable<Practiques[]> {
    return this.firestore.collection<Practiques>("practiques").valueChanges({ idField: 'id' });
    //select * from funkos;
  }

  addPractiques(practiques: Practiques) {
    this.firestore.collection("practiques").add({
      title: practiques.title,
      data: practiques.data,
      document: practiques.document,
      media: practiques.media,
      content: practiques.content,
      numeroDePractica: practiques.numeroDePractica,
      description: practiques.description
    });
  }

  deletePractiques(id: string) {
    this.firestore.collection<Practiques>("practiques").doc(id).delete();
  }

  updatePractiques(id: string, Practiques: Practiques) {
    this.firestore.collection("practiques").doc(id).update(Practiques);
  }

  getPractiquesByCollection(collection: string): Observable<Practiques[]> {
    return this.firestore.collection<Practiques>("practiques", (ref: any) => this.queryByCollection(collection, ref)).valueChanges({ idField: 'id' });
  }

  private queryByCollection(collection: string, ref: any) {
    return ref.where("collection", "==", collection);
  }
}
 