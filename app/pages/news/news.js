import {Page, NavController, NavParams, Loading} from 'ionic-angular';
import {ArticlePage} from '../article/article';
import {Http, Response} from 'angular2/http';
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
    
    /*let loading = Loading.create({
      content: "Loading News..."
    })
    this.nav.present(loading);*/
        
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
        
    this.http.get('http://pfai.ie/mobile/pfainews', {
        headers: Headers 
    })
    .map((res) => JSON.parse(toJson(res.text(), '')))
    .subscribe((data) => {
        
        /*this.items = Object.keys(data);*/
        this.items = data.result.item;
        console.log(this.items);
        /*loading.dismiss();*/
        
    }, (error) => {
        
        console.log('Error!');
        /*loading.dismiss();*/
        
    });
        
  }
    
  itemTapped(event, item) {
     this.nav.push(ArticlePage, {
       item: item
     });
  }

}


    /*this.nav.present(loading);*/



