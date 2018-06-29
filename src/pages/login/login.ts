import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { TrocarJogoPage } from '../trocar-jogo/trocar-jogo';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToTabsControllerPages(params){
    if (!params) params = {};
    // this.navCtrl.push(TrocarJogoPage);
    this.navCtrl.push(TabsControllerPage);
  }

  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }
}
