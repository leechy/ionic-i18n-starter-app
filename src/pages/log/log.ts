import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

}
