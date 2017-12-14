import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  language: string = 'en';

  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.language = this.translate.currentLang;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  switchLang() {
    this.translate.use(this.language);
  }

}
