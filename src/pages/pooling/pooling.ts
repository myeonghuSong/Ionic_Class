import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { pooling } from './poolingClass';
import { Observable } from 'rxjs/Observable';
import { PoolingResultPage } from '../pooling-result/pooling-result';

@Component({
  selector: 'page-pooling',
  templateUrl: 'pooling.html'
})
export class PoolingPage {
  poolings: FirebaseListObservable<any[]>;
  roomKey: String;

  constructor(public navCtrl: NavController,  public af: AngularFireDatabase) {
    this.roomKey = "room1";
    this.poolings = af.list(this.roomKey +'/pooling');
    
    console.log(this.poolings);
  }

  goToPoolingResult(poolings: any, params){
    
    console.log("KEY VALUE IS ", poolings);
    
    if (!params) params = {};
    this.navCtrl.push(PoolingResultPage, poolings);

  }

  addPooling(){
    console.log("ADD POOLING");
    let test: string = prompt("HELLO WORLD");
    if(test !== null){
      this.poolings.push(
        {
          no: 0,
          yes: 0,
          poolingName: test
        }
      );
      console.log("THE TEST IS : " + test);
    }
    //this.poolings.create(test);
  }

}
