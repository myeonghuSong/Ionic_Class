import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { question } from './question';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-q-a',
  templateUrl: 'q-a.html'
})

export class QAPage {

  questions: Observable<any[]>;
  roomKey: String;
  constructor(public navCtrl: NavController,  public af: AngularFireDatabase) {
    this.roomKey = "room1";
    this.questions = af.list(this.roomKey+'/question');
    console.log(typeof this.questions);
  }

  goToAnswer(params){
    if (!params) params = {};
    this.navCtrl.push(AnswerPage);
  }

}
