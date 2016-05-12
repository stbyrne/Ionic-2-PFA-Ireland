import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the TransferListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/transfer-list/transfer-list.html',
})
export class TransferListPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
