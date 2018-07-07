import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataExchangerProvider } from '../../providers/data-exchanger/data-exchanger';
// import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-trocar-jogo',
  templateUrl: 'trocar-jogo.html'
})

export class TrocarJogoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public offers: Observable<any[]>; 
  // [{
  //   gameName: 'teste1',
  //   plataform: 'ps4',
  //   place: 'Nao me toque',
  //   gameImage: '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'
  // },
  // {
  //   gameName: 'teste2',
  //   plataform: 'xbox',
  //   place: 'soledade',
  //   gameImage: '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'
  // },
  // {
  //   gameName: 'teste3',
  //   plataform: 'snes',
  //   place: 'Estaleirinho',
  //   gameImage: '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'
  // }]

  constructor(public navCtrl: NavController, 
              public dataExchanger: DataExchangerProvider,
              public afDB: AngularFireDatabase) {
    this.offers = afDB.list('offeredGames').valueChanges();
    console.log('offers'+ this.offers);
    //this.dataExchanger.loadOffers(this.updateGameOffers);
                  // firebase.database().ref(`/offeredGames/`).on('value', this.updateGameOffers);
  
  }

//  ngAfterViewInit(){                
//    var offersList = firebase.database().ref('/offeredGames');
 //   offersList.once('value').then((snapshot) => this.getData(snapshot)); //=> {
    //   console.log('snapshot');
    //   console.log(snapshot.val());
    //   this.getData(snapshot);
    // });
  // }
  // getData(dataSnapshot){
  //   console.log('before updating offers lists');
  //   console.log(dataSnapshot);
  //   this.offers = dataSnapshot.val();
  // }
}
