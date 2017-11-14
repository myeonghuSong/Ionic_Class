import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { answer } from './answerClass';
import { question } from '../q-a/question';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})
export class AnswerPage {
  answers: Observable<any[]>;
  questions: Observable<any[]>;
  roomKey: String;
  questionKey: String;
  constructor(public navCtrl: NavController,  public af: AngularFireDatabase) {
    this.roomKey = "room1";
    this.questionKey  = 'question1'
    this.questions = af.list(this.roomKey+'/question').valueChanges();
    this.answers = af.list(this.roomKey +'/question/'+this.questionKey+'/answer').valueChanges();
    console.log(typeof this.answers);
  }  
}
