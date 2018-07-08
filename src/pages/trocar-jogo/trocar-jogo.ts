import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataExchangerProvider } from '../../providers/data-exchanger/data-exchanger';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-trocar-jogo',
  templateUrl: 'trocar-jogo.html'
})

export class TrocarJogoPage {

  public offers: Observable<any[]>; 
  public proposals = {};
  constructor(public navCtrl: NavController, 
              public dataExchanger: DataExchangerProvider) {

    this.offers = dataExchanger.getOfferedGames();
    this.offers.subscribe(x =>console.log(x));
  }

  manifestInterest(offerID: string, proposal){
    console.log('offerID:' + offerID);
    console.log('proposal' + proposal);
  }
}
