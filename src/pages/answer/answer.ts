import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { answer } from './answerClass';
import { question } from '../q-a/question';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})

export class AnswerPage {

  answers: FirebaseListObservable<any[]>;
  questions: FirebaseListObservable<any[]>;
  roomKey: String;
  questionKey: String;

  constructor(public navCtrl: NavController,  public af: AngularFireDatabase) {
    this.roomKey = "room1";
    this.questionKey  = 'question';
    this.questions = af.list(this.roomKey+'/question');
    this.answers = af.list(this.roomKey+'/'+this.questionKey+'/answer');
    console.log(this.answers);
  }
}
