import {Component, OnInit} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {GroceryStoresService} from "../../services/grocery-stores";
import {Store} from "../../models/stores";
import {DataVerificationPage} from "../data-verification/data-verification";

@IonicPage()
@Component({
  selector: 'page-grocery-store',
  templateUrl: 'grocery-store.html',
})
export class GroceryStorePage implements OnInit{

  stores: Store[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public groceryStoreService: GroceryStoresService,
              public modalCtrl: ModalController) {
  }

  ngOnInit(): void {
    this.stores = this.groceryStoreService.getStores();
  }

  openAuthenticationModal(){
    let modal = this.modalCtrl.create('AuthenticationPage');
    modal.present();

    modal.onDidDismiss(data => {
      if(data.code == true){
        this.verificationPage();
      }else{
        console.log(data.code);
      }
    });
    // this.verificationPage();
  }

  verificationPage(){
    this.navCtrl.push(DataVerificationPage);
  }
}
