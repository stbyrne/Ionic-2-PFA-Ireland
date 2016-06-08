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
    this.navParams = navParams;
    
    let loading = Loading.create({
      content: "Loading News..."
    })
    this.nav.present(loading);
        
    // If we navigated to this page, we will have an item available as a nav param
    /*this.selectedItem = this.navParams.get('item');*/
        
    /*this.items = [{
        "body": "Main body text",
        "node_title": "Main Title",
        "thumbnail": "<img src='./resources/icon.png'></img>",
        "field_image": "<img src='./././resources/icon.png'></img>",
    }];*/
        
    this.http.get('http://pfai.ie/mobile/pfainews', {
        headers: Headers 
    })
    .map((res) => res.text())
    .subscribe((data) => {
        
        var value = [];
        
        var parser = require('xml2js').Parser({explicitArray : false});
        
        parser.parseString(data, function (err, result) {
            
            value = result.result.item;
        
        });
        
        this.items = value;
        
        console.log(this.items);
        
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



