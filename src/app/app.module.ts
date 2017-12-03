import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QAPage } from '../pages/q-a/q-a';
import { PoolingPage } from '../pages/pooling/pooling';
import { MainPage } from '../pages/main/main';
import { AnswerPage } from '../pages/answer/answer';
import { HomePage } from '../pages/home/home';
import { PoolingResultPage } from '../pages/pooling-result/pooling-result';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyAGVWru0t7O__U_iRI7DHZb9bXNnARV3Qk",
    authDomain: "taewoo-13d90.firebaseapp.com",
    databaseURL: "https://taewoo-13d90.firebaseio.com",
    projectId: "taewoo-13d90",
    storageBucket: "taewoo-13d90.appspot.com",
    messagingSenderId: "124145716591"
  };

@NgModule({
  declarations: [
    MyApp,
    QAPage,
    PoolingPage,
    MainPage,
    AnswerPage,
    PoolingResultPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QAPage,
    PoolingPage,
    MainPage,
    AnswerPage,
    PoolingResultPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomePage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
