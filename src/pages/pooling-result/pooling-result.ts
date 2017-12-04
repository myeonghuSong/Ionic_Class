import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { NativeStorage } from '@ionic-native/native-storage';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-pooling-result',
  templateUrl: 'pooling-result.html'
})
export class PoolingResultPage {

  pooling_value: any;
  pooling_base: FirebaseListObservable<any[]>;
  roomKey: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, private nativeStorage: NativeStorage, public alertCtrl: AlertController) {
    this.pooling_value = navParams.data;

    this.nativeStorage.getItem('room')
    .then(
      data => {this.pooling_base = af.list(data.name +'/pooling');},
      error => console.error(error)
    );

    //this.roomKey = "room1";
    //this.pooling_base = af.list(this.roomKey +'/pooling');
    
    
  
    console.log("THE TEST IS " + this.pooling_value);
    //this.pooling_base = af.list(this.pooling_value);
    //console.log("THIS IS TEST 2 ", this.pooling_base);
  }

  y_pooling(y_value: any){
    let alert2 = this.alertCtrl.create({
      title: 'SUCCESS',
      buttons: ['OK']
    });
    y_value.yes += 1;
    this.pooling_base.update(this.pooling_value.$key, {yes : y_value.yes});
    console.log("Y VALUE IS ", y_value.yes);
    alert2.present();
  }

  n_pooling(n_value: any){
    let alert2 = this.alertCtrl.create({
      title: 'SUCCESS',
      buttons: ['OK']
    });
    console.log("N VALUE IS ", n_value.no);
    n_value.no += 1;
    this.pooling_base.update(this.pooling_value.$key, {no : n_value.no});
    alert2.present();
  }
}
