import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private userID;
  constructor() {}
  
  async signUpUser(username: string, email:string, password:string): Promise<any> {
    try{
      const newUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      
      this.setUserID(newUser.user.uid);
      await firebase.database().ref(`/userProfile/${newUser.user.uid}`).set({email: email, username: username});
      
      return newUser;
    }catch(error) {
      throw error;
    }
  }
  
  setUserID(userID){
    this.userID = userID;
  }

  getUserID(){
    return this.userID;
  }

  async loginUser(email: string, password: string): Promise<any> {
    
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logoutUser(): Promise<any> {
    return new Promise((resolve, reject)=>{
      firebase.auth().signOut()
        .then(() =>{
          resolve(true);
        })
        .catch((error: any) => {
          reject(error);
        })
    });
  }

}
