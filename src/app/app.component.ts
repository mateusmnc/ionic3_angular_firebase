import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



// import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import firebase from 'firebase';
import {Unsubscribe} from '@firebase/util';
import { FIREBASE_CONFIG } from './firebase.config';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  // rootPage:any = TabsControllerPage;
  // rootPage:any = LoginPage;
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthProvider) {
    
    firebase.initializeApp(FIREBASE_CONFIG);

    const unsubscribe:Unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.auth.setUserID(user.uid);
        this.rootPage = TabsControllerPage;
        unsubscribe();
      }else{
        this.rootPage = LoginPage;
        unsubscribe();
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
