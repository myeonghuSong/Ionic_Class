import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';


@Component({
  selector: 'page-q-a',
  templateUrl: 'q-a.html'
})
export class QAPage {

  constructor(public navCtrl: NavController) {
  }
  goToAnswer(params){
    if (!params) params = {};
    this.navCtrl.push(AnswerPage);
  }
}
