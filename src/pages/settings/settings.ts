import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {BaseInput} from "ionic-angular/util/base-input";
import {SettingsService} from "../../services/setrtings.service";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  settingsService: SettingsService) {
  }

  get isAlternateColor(): boolean {
    return this.settingsService.isAlternateColor;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
    console.log('toggle ', toggle);
    this.settingsService.isAlternateColor = toggle.checked;
  }

}
