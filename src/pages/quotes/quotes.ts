import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Category, Quote} from "../../data/models";
import {QuotesService} from "../../services/qoute.service";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  private category: Category;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertController: AlertController,
              private  quotesService: QuotesService) {
  }

  ngOnInit(): void {
    this.category = this.navParams.data as Category
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
    this.category = this.navParams.data as Category
  }


  onFavorite(item: Quote) {
    const alert = this.alertController.create({
      title: 'add qoute',
      subTitle: 'sure?',
      message: 'sure sure?',
      buttons: [
        {
          text: 'yes',
          handler: () => {
            this.quotesService.add(item);
            console.log('item ', item)
          }
        },
        {
          text: 'no',
          handler: () => {
            console.log('no')
          },
          role: 'cancel'
        }
      ]
    });
    alert.present();
  }
}
