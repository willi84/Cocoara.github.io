import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { Portfolio } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {


  constructor(private firestore: AngularFirestore) { }

  getPortfolio(): Observable<Portfolio[]> {
    return this.firestore.collection<Portfolio>("portfolios").valueChanges({ idField: 'id' });
    //select * from funkos;
  }

  addPortfolio(portfolio: Portfolio) {
    this.firestore.collection("portfolios").add({
      title: portfolio.title,
      image: portfolio.image,
      data: portfolio.data,
      description: portfolio.description
    });
  }

  deletePortfolio(id: string) {
    this.firestore.collection("portfolios").doc(id).delete();
  }

  updatePortfolio(id: string, portfolio: Portfolio) {
    this.firestore.collection("portfolios").doc(id).update(portfolio);
  }

  getPortfolioByCollection(collection: string): Observable<Portfolio[]> {
    return this.firestore.collection<Portfolio>("portfolios", (ref: any) => this.queryByCollection(collection, ref)).valueChanges({ idField: 'id' });
  }

  private queryByCollection(collection: string, ref: any) {
    console.log(collection);
    return ref.where("collection", "==", collection);
  }
}
 