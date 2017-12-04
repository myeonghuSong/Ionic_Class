import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AnswerPage } from '../answer/answer';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { question } from './question';
import { Observable } from 'rxjs/Observable';
import { road } from '../road';
import { HomePage } from '../home/home'
import { NativeStorage } from '@ionic-native/native-storage';


import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-q-a',
  templateUrl: 'q-a.html'
})

export class QAPage {
  value1 :any;
  value2 :any;

  road : road;
  questions: FirebaseListObservable<any[]>;
  roomKey: string;
  constructor(public navCtrl: NavController, navParams : NavParams, public alertCtrl: AlertController, public af: AngularFireDatabase,private nativeStorage: NativeStorage) {
    //this.roomKey = "room1";
    //this.roomKey = this.road.key;


    //this.roomKey = navParams.get('name');
    console.log("whatthe", this.roomKey);
    
    console.log(typeof this.questions);
    this.nativeStorage.getItem('room')
    .then(
      data => {this.questions = af.list(data.name+'/question'); console.log("TAEWOO " + data.name)},
      error => console.error(error)
    );
  
    
  
  
  }


  addQuestion(){
    let alert2 = this.alertCtrl.create({
      title: 'SUCCESS',
      buttons: ['OK']
    });
    console.log("addAnswer");
    alert2.present();
    this.questions.push({questionName: this.value1, questionContent: this.value2 });
    
    
    //let theNewAnswer: string = prompt("New Answer");
   
    
    // if (theNewAnswer !== '')
    // {
    //   this.dabs.push({answerTitle: "the" , answerContent: "adad"});
    // }
    //this.poolings.create(test);
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
