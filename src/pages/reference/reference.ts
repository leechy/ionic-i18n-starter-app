import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-reference',
  templateUrl: 'reference.html'
})
export class ReferencePage {

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

}
