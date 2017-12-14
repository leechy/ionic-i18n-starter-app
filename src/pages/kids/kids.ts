import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-kids',
  templateUrl: 'kids.html'
})
export class KidsPage {

  constructor(
    public navCtrl: NavController,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

}
