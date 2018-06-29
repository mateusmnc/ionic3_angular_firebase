import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostarJogoPage } from '../postar-jogo/postar-jogo';
import { TrocarJogoPage } from '../trocar-jogo/trocar-jogo';
import { InteressadosPage } from '../interessados/interessados';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PostarJogoPage;
  tab2Root: any = TrocarJogoPage;
  tab3Root: any = InteressadosPage;
  tab4Root: any = ProfilePage;
  constructor(public navCtrl: NavController) {
  }
  
}
