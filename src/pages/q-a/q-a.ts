import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { question } from './question';
import { Observable } from 'rxjs/Observable';
import { road } from '../road';

@Component({
  selector: 'page-q-a',
  templateUrl: 'q-a.html'
})

export class QAPage {
  road : road;
  questions: FirebaseListObservable<any[]>;
  roomKey: String;
  constructor(public navCtrl: NavController,  public af: AngularFireDatabase) {
    this.roomKey = "room1";
    this.questions = af.list(this.roomKey+'/question');
    console.log(typeof this.questions);
  }

  goToAnswer(question: any, params){
    console.log(" INSIDE FUNCTION : " + question);
    //this.road.key = question;
    // console.log("what the fu");
    // console.log(typeof this.road.key);
    if (!params) params = {};
    this.navCtrl.push(AnswerPage,question);



  }
}
