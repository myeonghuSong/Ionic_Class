import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  roomKey: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roomKey = navParams.data;
    console.log("PASSWD " , this.roomKey);
  }

}
