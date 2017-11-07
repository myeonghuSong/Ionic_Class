import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoolingResultPage } from '../pooling-result/pooling-result';


@Component({
  selector: 'page-pooling',
  templateUrl: 'pooling.html'
})
export class PoolingPage {

  constructor(public navCtrl: NavController) {
  }
  goToPoolingResult(params){
    if (!params) params = {};
    this.navCtrl.push(PoolingResultPage);
  }
}
