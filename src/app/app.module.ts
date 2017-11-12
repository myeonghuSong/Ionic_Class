import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QAPage } from '../pages/q-a/q-a';
import { PoolingPage } from '../pages/pooling/pooling';
import { MainPage } from '../pages/main/main';
import { AnswerPage } from '../pages/answer/answer';
import { PoolingResultPage } from '../pages/pooling-result/pooling-result';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
    apiKey: "AIzaSyD3YqZ681oW4u-PPBZPzOGHHB5LyrsqUpY",
    authDomain: "ionic2do-22eb9.firebaseapp.com",
    databaseURL: "https://ionic2do-22eb9.firebaseio.com",
    projectId: "ionic2do-22eb9",
    storageBucket: "ionic2do-22eb9.appspot.com",
    messagingSenderId: "744753627668"
  };

@NgModule({
  declarations: [
    MyApp,
    QAPage,
    PoolingPage,
    MainPage,
    AnswerPage,
    PoolingResultPage
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
    PoolingResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
