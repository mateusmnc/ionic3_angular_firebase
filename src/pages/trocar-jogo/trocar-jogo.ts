import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-trocar-jogo',
  templateUrl: 'trocar-jogo.html'
})
export class TrocarJogoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public offers = [{
    gameName: 'teste1',
    plataform: 'ps4',
    place: 'Nao me toque',
    gameImage: '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'
  },{
    gameName: 'teste2',
    plataform: 'xbox',
    place: 'soledade',
    gameImage: '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'
  },{
    gameName: 'teste3',
    plataform: 'snes',
    place: 'Estaleirinho',
    gameImage: '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'
  },
]
  constructor(public navCtrl: NavController) {
  }

}
