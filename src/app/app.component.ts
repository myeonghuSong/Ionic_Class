import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AnswerPage } from '../pages/answer/answer';
import { NavController, NavParams } from 'ionic-angular';
import { PoolingPage } from '../pages/pooling/pooling';
import { PoolingResultPage } from '../pages/pooling-result/pooling-result';
import { MainPage } from '../pages/main/main';


import { QAPage } from '../pages/q-a/q-a';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  roomKey_ : any;

  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = MainPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToQA(params){
    //여기서 홈페이지는 받아와지는데 안에 메서드 접근을 못하겠음. 이거 고치면 됨
    this.roomKey_ = HomePage;
    //this.roomKey_ = HomePage.setRoomKey();
    if (!params) params = {};
    console.log("The Room Key is " + this.roomKey_);
    console.log(this.roomKey_);
    this.navCtrl.setRoot(QAPage);
  }goToAnswer(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnswerPage);
  }goToPooling(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PoolingPage);
  }goToPoolingResult(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PoolingResultPage);
  }goToMain(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MainPage);
  }
}
