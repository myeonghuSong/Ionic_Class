import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AnswerPage } from '../pages/answer/answer';

import { PoolingPage } from '../pages/pooling/pooling';
import { PoolingResultPage } from '../pages/pooling-result/pooling-result';
import { MainPage } from '../pages/main/main';

import { QAPage } from '../pages/q-a/q-a';
import { road } from '../pages/road';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
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
   
    let road : road;
    let abc : string;
    this.navCtrl.setRoot(QAPage);
  }
  goToAnswer(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnswerPage);
  }
  goToPooling(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PoolingPage);
  }
  goToPoolingResult(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PoolingResultPage);
  }
  goToMain(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MainPage);
  }
}
