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

  rooms: FirebaseListObservable<(any[])>;
  pwCollection: string[];
  ranPw: string;
  roomName: any;
  
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
    
    let passwd: string = prompt("Enter your Password!");
    
    if(passwd!==null){
      console.log(passwd);
    }

    console.log("TITLE IS ", this.roomName);
    
    
    // this.rooms.subscribe(snapshots=>{
    //   snapshots.forEach(snapshot=>{
    //     console.log(snapshot.key, snapshot.val());
    //   })
    // })
    this.rooms.forEach(room=>{
      console.log('Item: ', room);
    })

    this.navCtrl.push(HomePage);

  }
}
