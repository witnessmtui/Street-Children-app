import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IrviewPage } from '../pages/irview/irview';
import { IiviewPage } from '../pages/iiview/iiview';
import { EnrolPage } from '../pages/enrol/enrol';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IrviewPage,
    IiviewPage,
    EnrolPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IrviewPage,
    IiviewPage,
    EnrolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
