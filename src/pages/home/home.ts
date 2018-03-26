import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from "../registration/registration";
import { MainmenuPage } from "../mainmenu/mainmenu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

onGoToRegistration() {
	this.navCtrl.push(RegistrationPage);
}
onGoToMainmenu() {
	this.navCtrl.push(MainmenuPage);
}

}
