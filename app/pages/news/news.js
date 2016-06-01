import {Page, NavController, NavParams, Loading} from 'ionic-angular';
import {ArticlePage} from '../article/article';
import {Http, Response} from 'angular2/http';
import {xml2js} from 'xml2js';


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
    
    let loading = Loading.create({
      content: "Loading News..."
    })
    this.nav.present(loading);
        
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
        
    this.http.get('http://pfai.ie/mobile/pfainews', {
        headers: Headers 
    })
    .map((res) => res.text())
    .subscribe((items) => {
        
        var parser = require('xml2js').Parser({explicitArray : false});
        parser.parseString(items, function (err, result) {
            
            console.log(result.result.item);
            return result.result.item;
            
        });
        
        loading.dismiss();
        
    }, (error) => {
        
        console.log('Error!');
        loading.dismiss();
        
    });
        
  }
    
  itemTapped(event, item) {
     this.nav.push(ArticlePage, {
       item: item
     });
  }

}


    /*this.nav.present(loading);*/



