import {NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ConfigurationPage} from "../pages/configuration/configuration";
import {IluminationPage} from "../pages/ilumination/ilumination";
import {LightsService} from "../services/lights";
import {GroceryShoppingPage} from "../pages/grocery-shopping/grocery-shopping";
import {GroceriesService} from "../services/groceries";
import {GroceryStorePage} from "../pages/grocery-store/grocery-store";
import {StoresService} from "../services/stores";
import {PopoverInfoComponent} from "../components/more-info.popover";
import {VigilancePage} from "../pages/vigilance/vigilance";
import {CamerasService} from "../services/cameras";
import {IluminationConfigPage} from "../pages/ilumination-config/ilumination-config";
import {CameraPage} from "../pages/camera/camera";
import {DataVerificationPage} from "../pages/data-verification/data-verification";
import {SuccessfulPaymentPage} from "../pages/successful-payment/successful-payment";

import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {ProductsService} from "../services/products";
import { ProductsApiProvider } from '../providers/products-api/products-api';
import {HttpClientModule} from "@angular/common/http";
import {ServicePaymentsService} from "../services/servicePayments";
import {ServicesPage} from "../pages/services/services";
import { ServicesApiProvider } from '../providers/services-api/services-api';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreProvider } from '../providers/firestore/firestore';

import { StreamingMedia } from "@ionic-native/streaming-media";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

export const config = {
  apiKey: "AIzaSyBe3wyrUzTphqwc4FfpaVmXeoPHVV4U8Vw",
  authDomain: "smart-admin-8de18.firebaseapp.com",
  databaseURL: "https://smart-admin-8de18.firebaseio.com",
  projectId: "smart-admin-8de18",
  storageBucket: "smart-admin-8de18.appspot.com",
  messagingSenderId: "645481167613"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConfigurationPage,
    IluminationPage,
    GroceryShoppingPage,
    GroceryStorePage,
    PopoverInfoComponent,
    IluminationConfigPage,
    VigilancePage,
    CameraPage,
    DataVerificationPage,
    SuccessfulPaymentPage,
    ServicesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Atrás'
    }),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConfigurationPage,
    IluminationPage,
    GroceryShoppingPage,
    GroceryStorePage,
    PopoverInfoComponent,
    IluminationConfigPage,
    VigilancePage,
    CameraPage,
    DataVerificationPage,
    SuccessfulPaymentPage,
    ServicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LightsService,
    GroceriesService,
    StoresService,
    CamerasService,
    ScreenOrientation,
    ProductsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsApiProvider,
    ServicePaymentsService,
    ServicesApiProvider,
    FirestoreProvider,
    StreamingMedia,
    BarcodeScanner
  ]
})
export class AppModule {}
