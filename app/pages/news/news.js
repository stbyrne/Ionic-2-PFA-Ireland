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
    
    
    this.nav = nav;
    this.http = http;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    
    this.http.get('http://pfai.ie/mobile/pfainews', {
        headers: Headers
    })
    .map(res => res.json())
    .subscribe((data) => {
        this.items = data;
        console.log(this.items);
        
    });
        
    
  }
    
  /*showLoader(){
    let loading = Loading.create({
      content: 'Please wait...'
    });
    this.nav.present(loading);
  }*/

  itemTapped(event, item) {
     this.nav.push(ArticlePage, {
       item: item
     });
  }
}
