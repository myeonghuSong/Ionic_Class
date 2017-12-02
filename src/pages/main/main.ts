import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})

export class MainPage {
  value1: any;
  rooms: FirebaseListObservable<(any[])>;
  pwCollection: string[];
  ranPw: string;
  roomName: any;
  room_Variable: any;
  alert_flag: boolean = false;
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public alertCtrl: AlertController) {

    this.rooms = af.list('/');
    console.log(this.rooms);
  }
  
  createRoom(){
    this.ranPw = '';
    this.pwCollection = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
    '!','@','#','$','%','^','&','*','(',')'];
      
   
    for(var i = 0 ; i < 5; i ++){
      this.ranPw = this.ranPw + this.pwCollection[Math.floor((Math.random()*this.pwCollection.length))];
    }
    
    console.log("CREATE ROOM");
    console.log(this.ranPw);

      let prompt = this.alertCtrl.create({
        title: 'WELCOME & REMEMBER!',
        message: "Your room number is " + this.ranPw + " " + " "+ "You Have to Remember!",
        inputs: [
          {
            name: 'title',
            placeholder: "Input your room name"
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log(data);
              this.roomName = data.title;
              this.rooms.push(
                {
                  roomName: this.roomName,
                  roomNumber: this.ranPw
                }
                );
            }
          }
        ]
      });
      prompt.present();
  }

  joinRoom(params){
    console.log("VALUE IS " + this.value1);
    this.room_Variable = 0;
    let passwd: string = this.value1;
    
    if(passwd!==null){
      console.log(passwd);
    }

    console.log("TITLE IS ", this.roomName);
    
    console.log("PASSWD IS " + passwd);
    // this.rooms.subscribe(snapshots=>{
    //   snapshots.forEach(snapshot=>{
    //     console.log(snapshot.key, snapshot.val());
    //   })
    // })
    
    this.rooms.forEach(room=>{
      // if(this.ranPw==room.roomNumber){
      //   console.log("CORRECT!");
      // }
      room.forEach(a=>{
        if(passwd == a['roomNumber']){
            console.log("CORRECT !!!!" + a['$key']);
            this.navCtrl.push(HomePage);
            this.alert_flag = true;
        }
      })
      //console.log('TEST : ', room[0]);
      
    })

    ////여기 아래로 비동기식이라 위에 forEach 도는 동안 얘가 먼저 시작 됨. promise 로 코딩 변경 필요함
    if(this.alert_flag==false){
      let alert2 = this.alertCtrl.create({
        title: 'WRONG ROOM NUMBER',
        subTitle: 'Check your room number correctly',
        buttons: ['OK']
      });

      alert2.present();    
    }

  }
  
}
