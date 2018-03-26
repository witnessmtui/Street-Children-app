import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrformPage } from "../irform/irform";
import { IiformPage } from "../iiform/iiform";

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onGoToIR(){
  	this.navCtrl.push(IrformPage);

  }
  onGoToII(){
  	this.navCtrl.push(IiformPage);

  }
  }


