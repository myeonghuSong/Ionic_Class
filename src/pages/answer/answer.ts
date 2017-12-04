import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { answer } from './answerClass';
//import { question } from '../q-a/question';
import { Observable } from 'rxjs/Observable';
import { road } from '../road';

import { AlertController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';

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

  roomKey: string;
  questionKey: String;
  answerkey: string;
  test : any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public NavParams: NavParams, public af: AngularFireDatabase, private nativeStorage: NativeStorage) {
    /////////////////////////////
   
    //////////////////////////////
    
    this.test = NavParams.data;
  
    this.nativeStorage.getItem('room')
    .then(
      data => {this.answers = af.list(data.name+'/question/'+this.test.$key + '/answer'); console.log("TAEWOO " + data.name)},
      error => console.error(error)
    );
    //this.roomKey = "room1";
    console.log("TERRY  " + this.test);
    
    //this.questions = af.list(this.roomKey+'/question/'+this.test.$key);
    //this.questions = af.list(this.roomKey+'/question'+this.test.$key+'questionContent');
    
   // this.answers = af.list(this.roomKey+'/question/'+this.test.$key);
    //this.dabs = af.list(this.roomKey+'/question/'+this.test.$key);
    console.log("TEST TEST TEST " + this.test.$key);

    console.log(this.answers);



  }

  addAnswer(){
    let alert2 = this.alertCtrl.create({
      title: 'SUCCESS',
      buttons: ['OK']
    });
    
    alert2.present();
    console.log("addAnswer");
    this.answers.push({answerTitle: this.value1, answerContent: this.value2 });
    
    
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
