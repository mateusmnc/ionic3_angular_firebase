import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public app: App,
              private auth: AuthProvider) {
  }
  logout(): void{
    this.auth.logoutUser().then((isLoggedOut) =>{
      this.app.getRootNav().setRoot(LoginPage);
    })
    .catch((error) =>{
      console.log(error);
    });
  }
}
