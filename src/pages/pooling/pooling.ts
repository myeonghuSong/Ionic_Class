import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { pooling } from './poolingClass';
import { Observable } from 'rxjs/Observable';
import { PoolingResultPage } from '../pooling-result/pooling-result';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-pooling',
  templateUrl: 'pooling.html'
})
export class PoolingPage {
  poolings: FirebaseListObservable<any[]>;
  roomKey: String;

  constructor(public navCtrl: NavController,  public af: AngularFireDatabase, private nativeStorage: NativeStorage) {
    
    this.nativeStorage.getItem('room')
    .then(
      data => {this.poolings = af.list(data.name +'/pooling');},
      error => console.error(error)
    );
    
    //this.roomKey = "room1";
    //this.poolings = af.list(this.roomKey +'/pooling');
    
    console.log(this.poolings);
  }

  goToPoolingResult(pooling: any, params){
    
    console.log("KEY VALUE IS ", pooling);
    
    if (!params) params = {};
    this.navCtrl.push(PoolingResultPage, pooling);

  }

  addPooling(){
    console.log("ADD POOLING");
    let test: string = prompt("ADD Pooling");
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
