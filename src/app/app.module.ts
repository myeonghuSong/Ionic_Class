import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { QAPage } from '../pages/q-a/q-a';
import { PoolingPage } from '../pages/pooling/pooling';
import { MainPage } from '../pages/main/main';
import { AnswerPage } from '../pages/answer/answer';
import { PoolingResultPage } from '../pages/pooling-result/pooling-result';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp)
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