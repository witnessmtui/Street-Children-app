var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IrformPage } from "../irform/irform";
import { IiformPage } from "../iiform/iiform";
var MainmenuPage = /** @class */ (function () {
    function MainmenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MainmenuPage.prototype.onGoToIR = function () {
        this.navCtrl.push(IrformPage);
    };
    MainmenuPage.prototype.onGoToII = function () {
        this.navCtrl.push(IiformPage);
    };
    MainmenuPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-mainmenu',
            templateUrl: 'mainmenu.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MainmenuPage);
    return MainmenuPage;
}());
export { MainmenuPage };
//# sourceMappingURL=mainmenu.js.map