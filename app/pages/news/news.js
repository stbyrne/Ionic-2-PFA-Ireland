import {Page, NavController, NavParams} from 'ionic-angular';
import {ArticlePage} from '../article/article';
import {Http} from 'angular2/http';
import {Inject} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/news/news.html'
})
export class NewsPage {
  static get parameters() {
    return [[NavController], [NavParams], [Http]];
  }
  
    constructor(nav, navParams, http) {
    /*console.log('News costructor firing!');*/
    
    this.nav = nav;
    this.http = http;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    //
    this.http.get('http://pfai.ie/mobile/pfainews').subscribe((data) => {
      console.log(data);
    }, error => {
      console.log('Failed');
    });


    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
     this.nav.push(ArticlePage, {
       item: item
     });
  }
}
