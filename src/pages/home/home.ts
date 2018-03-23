import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IrviewPage } from '../irview/irview';
import { IiviewPage } from '../iiview/iiview';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
irPage = IrviewPage;
iiPage = IiviewPage;
constructor (private navCtrl: NavController){}
  onGoToIR(){
  this.navCtrl.push(this.irPage);
  }
  onGoToII(){
  this.navCtrl.push(this.iiPage);
  }
}
