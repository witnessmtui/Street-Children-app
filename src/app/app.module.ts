import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from "../pages/registration/registration";
import { MainmenuPage } from "../pages/mainmenu/mainmenu";

import { IrformPage } from "../pages/irform/irform";
import { IiformPage } from "../pages/iiform/iiform";
import { ReceivedformsPage } from "../pages/receivedforms/receivedforms";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    MainmenuPage,
    IrformPage,
    IiformPage,
    ReceivedformsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    MainmenuPage,
    IrformPage,
    IiformPage,
    ReceivedformsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
