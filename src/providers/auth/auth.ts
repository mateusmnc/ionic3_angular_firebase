import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  
  constructor() {}
  
  async signUpUser(username: string, email:string, password:string): Promise<any> {
    try{
      const newUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
      await firebase.database().ref(`/userProfile/${newUser.user.uid}`).set({email: email, username: username});
      
      return newUser;
    }catch(error) {
      throw error;
    }
  }
  
  async loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logoutUser(): Promise<any> {
    return new Promise((resolve, reject)=>{
      firebase.auth().signOut()
        .then(() =>{
          const loggedOut = true;
          resolve(true);
        })
        .catch((error: any) => {
          reject(error);
        })
    });
  }
}
