import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  public roomKey: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.roomKey = navParams.data;
    console.log("PASSWD " , this.roomKey);
  }


  public get setRoomKey(){
    console.log("DID YOU COME?");
    return this.roomKey;
  }

}
