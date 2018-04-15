import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Category} from "../../data/models";
import quotes from '../../data/quotes'

/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  qoutes: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(): void {
    this.qoutes = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
