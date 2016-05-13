import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {NewsPage} from './pages/news/news';
import {SearchPage} from './pages/search/search';
import {TransferListPage} from './pages/transfer-list/transfer-list';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';


@App({
  templateUrl: 'build/app.html',
    providers: [HTTP_PROVIDERS],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
  
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform], [MenuController]];
  }

  constructor(app, platform, menu) {
    // set up our app
    this.app = app;
    this.platform = platform;
    this.menu = menu;
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Transfer List', component: TransferListPage },
      { title: 'News', component: NewsPage },
      { title: 'Search...', component: SearchPage }
    ];

    // make HelloIonicPage the root (or first) page
    this.rootPage = HomePage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
