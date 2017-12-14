import { Component } from '@angular/core';

import { LogPage } from '../log/log';
import { KidsPage } from '../kids/kids';
import { ReferencePage } from '../reference/reference';
import { SettingsPage } from '../settings/settings';

import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = KidsPage;
  tab2Root = LogPage;
  tab3Root = ReferencePage;
  tab4Root = SettingsPage;

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
}
