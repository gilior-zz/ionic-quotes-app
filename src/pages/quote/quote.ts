import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Quote} from "../../data/models";

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  public quote: Quote;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private  viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
    this.quote = this.navParams.data;
  }

  onClose(unFav:boolean=false) {
    this.viewController.dismiss(unFav);
  }

}
