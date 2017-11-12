import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {

  rooms: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController) {
  }

}
