import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'page-pooling-result',
  templateUrl: 'pooling-result.html'
})
export class PoolingResultPage {

  pooling_value: any;
  pooling_base: FirebaseListObservable<any[]>;
  roomKey: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.pooling_value = navParams.data;
    this.roomKey = "room1";
    this.pooling_base = af.list(this.roomKey +'/pooling');
    
    
  
    console.log("THE TEST IS " + this.pooling_value);
    //this.pooling_base = af.list(this.pooling_value);
    //console.log("THIS IS TEST 2 ", this.pooling_base);
  }

  y_pooling(y_value: any){
    console.log("Y VALUE IS ", y_value.yes);
    y_value.yes += 1;
    this.pooling_base.update(this.pooling_value.$key, {yes : y_value.yes});
  }

  n_pooling(n_value: any){
    console.log("N VALUE IS ", n_value.no);
    n_value.no += 1;
    this.pooling_base.update(this.pooling_value.$key, {no : n_value.no});
    
  }
}
