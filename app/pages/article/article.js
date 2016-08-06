import {Page, NavController, NavParams} from 'ionic-angular';
import {Pipe, PipeTransform} from "angular2/core";
/*import {DateFormatter} from 'angular2/src/facade/intl';*/

@Page({
  templateUrl: 'build/pages/article/article.html'
})
export class ArticlePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}

