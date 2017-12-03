import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { answer } from './answerClass';
//import { question } from '../q-a/question';
import { Observable } from 'rxjs/Observable';
import { road } from '../road';

@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html'
})

export class AnswerPage {

  answers: FirebaseListObservable<any[]>;
  dabs: FirebaseListObservable<any[]>;
  
  questions: FirebaseListObservable<any[]>;
  //questions: FirebaseListObservable<any[]>;
  
  value1 :any;
  value2 :any;

  roomKey: String;
  questionKey: String;
  answerkey: string;
  test : any;

  constructor(public navCtrl: NavController, public NavParams: NavParams, public af: AngularFireDatabase) {
    this.test = NavParams.data;
    
    this.roomKey = "room1";
    this.questions = af.list(this.roomKey+'/question'+this.test.$key);
    //this.questions = af.list(this.roomKey+'/question'+this.test.$key+'questionContent');
    
    this.answers = af.list(this.roomKey+'/question/'+this.test.$key);
    this.dabs = af.list(this.roomKey+'/question/'+this.test.$key);
    console.log("TEST TEST TEST " + this.test.$key);

    console.log(this.answers);
  }

  addAnswer(){
    console.log("addAnswer");
    this.dabs.push({answerTitle: this.value1, answerContent: this.value2 });
    
    
    //let theNewAnswer: string = prompt("New Answer");
   
    
    // if (theNewAnswer !== '')
    // {
    //   this.dabs.push({answerTitle: "the" , answerContent: "adad"});
    // }
    //this.poolings.create(test);
  }

  removeAnswer(slidingItem: ItemSliding, answer: answer)
  {
    this.answers.remove(answer.$key);
    slidingItem.close();
  }

}
