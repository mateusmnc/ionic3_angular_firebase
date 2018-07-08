import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
import { AuthProvider } from '../auth/auth';

@Injectable()
export class DataExchangerProvider {
  
  constructor(private angularFireDB: AngularFireDatabase, private auth:AuthProvider) {}
  
  getOfferedGames(): Observable<{}[]> {
    return this.angularFireDB.list('offeredGames').valueChanges();
  }

  async publishGameOffer(gameOffer: any): Promise<any> {
    try{
      const offerUuid = uuid();
      const publishableGameOffer = gameOffer;
      publishableGameOffer.status = 'open';
      publishableGameOffer.userID = firebase.auth().currentUser.uid;
      publishableGameOffer.offerID = offerUuid;
      return await firebase.database()
        .ref(`/offeredGames/${offerUuid}`).set(publishableGameOffer)
        .then( done => {
          console.log('publishGameOffer, Then(done): ');
          console.log(done);
        });
      
    }catch(error) {
      console.log('lancei erro dentro da funcao');
      throw error;
    }
  }

  async manifestInterest(offerID:string, proposal:string){
    const proposalID = uuid();
    const userID = this.auth.getUserID();
    
    console.log('user fora: ' + userID);
    this.angularFireDB
      .object(`/offeredGames/${offerID}/proposals/${proposalID}`)
      .update({'proposalID': proposalID, 'proposal':proposal, 'interestedUserId': userID});
  }
}