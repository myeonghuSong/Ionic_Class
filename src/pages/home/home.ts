import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { road } from '../road';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  public roomKey: string;
  public roomName: string;
  road : road;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase) {
    this.roomKey = navParams.get('room_name');
    this.roomName = navParams.get('room_name2');
    
   
    console.log("PASSWD " , this.roomKey);
  }


  private newFunction(): string {
      return this.roomKey;
  }

  public get setRoomKey(){
    console.log("DID YOU COME?");
    return this.roomKey;
  }

}
