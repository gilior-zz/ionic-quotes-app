import {Component, OnInit} from '@angular/core';
import {IonicPage, MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Quote} from "../../data/models";
import {QuotesService} from "../../services/qoute.service";
import {QuotePage} from "../quote/quote";
import {SettingsService} from "../../services/setrtings.service";

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
export class FavoritesPage implements OnInit {
  public quotes: Quote[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public quotesService: QuotesService,
              private  modalController: ModalController,
              private menuController: MenuController,
              private  settingsService: SettingsService) {
  }

  get backColor(): string {
    return this.settingsService.isAlternateColor ? 'altQuoteBC' : 'quoteBC';
  }

  ngOnInit(): void {
    this.quotes = this.quotesService.gett();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.gett();
  }

  onClick(item: Quote) {
    const modal = this.modalController.create('QuotePage', item);
    modal.present();
    modal.onDidDismiss((unFav: boolean) => {
      console.log('unFav ', unFav)
      if (unFav) this.onRemove(item);
    })
  }

  onRemove(item: Quote) {
    this.quotesService.removee(item);
    this.ionViewWillEnter();
  }

  onOpenMenu() {
    this.menuController.open();
  }

  get isAlternateColor(): boolean {
    return this.settingsService.isAlternateColor;
  }
}
