import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {

  rooms: AngularFireList<any>;

  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {

    this.rooms = af.list('/');

    console.log(this.rooms);
  }

}
