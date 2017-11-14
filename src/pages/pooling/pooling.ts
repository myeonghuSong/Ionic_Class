import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { pooling } from './poolingClass';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-pooling',
  templateUrl: 'pooling.html'
})
export class PoolingPage {
  poolings: Observable<any[]>;
  roomKey: String;
  constructor(public navCtrl: NavController,  public af: AngularFireDatabase) {
    this.roomKey = "room1";
    this.poolings = af.list(this.roomKey +'/pooling').valueChanges();
    console.log(typeof this.poolings);
  }
}
