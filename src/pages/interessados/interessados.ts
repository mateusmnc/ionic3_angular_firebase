import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DataExchangerProvider } from '../../providers/data-exchanger/data-exchanger';
import * as _ from "lodash";
@Component({
  selector: 'page-interessados',
  templateUrl: 'interessados.html'
})
export class InteressadosPage {
  public replies = {};
  public deals: Observable<{}[]>;   
  public proposals = new Array();
  constructor(public navCtrl: NavController, 
              public dataExchanger: DataExchangerProvider) {

    this.deals = this.dataExchanger.getMyOpenOffers();
    this.deals.subscribe(offers => {
      // console.log(offers[0].proposals);
      offers.forEach((offer, index) => {
        console.log('offer id: ' + index);
        this.proposals[index] = _.values(offer.proposals);
        console.log(this.proposals[index]);
      })
    });

  }

  acceptedProposal(offerIndex, proposalIndex){
    
  }

  declinedProposal(offerIndex, proposalIndex){
    
  }
}
