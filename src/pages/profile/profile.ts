import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.popToRoot();
    // this.navCtrl.push(LoginPage);
  }
  // goToTrocarJogo(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(TrocarJogoPage);
  // }
}
