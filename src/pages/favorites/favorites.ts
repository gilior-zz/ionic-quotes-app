import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/models";
import {QuotesService} from "../../services/qoute.service";
import {QuotePage} from "../quote/quote";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  public quotes: Quote[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public quotesService: QuotesService,
              private  modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.gett();
  }

  onClick(item: Quote) {
    const modal = this.modalController.create('QuotePage',);
    modal.present();

  }

}
