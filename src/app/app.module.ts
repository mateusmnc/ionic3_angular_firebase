import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PostarJogoPage } from '../pages/postar-jogo/postar-jogo';
import { TrocarJogoPage } from '../pages/trocar-jogo/trocar-jogo';
import { InteressadosPage } from '../pages/interessados/interessados';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { Camera } from '@ionic-native/camera';
import { DataExchangerProvider } from '../providers/data-exchanger/data-exchanger';
import { FIREBASE_CONFIG } from './firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
@NgModule({
  declarations: [
    MyApp,
    PostarJogoPage,
    TrocarJogoPage,
    InteressadosPage,
    TabsControllerPage,
    SignupPage,
    LoginPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostarJogoPage,
    TrocarJogoPage,
    InteressadosPage,
    TabsControllerPage,
    SignupPage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DataExchangerProvider,
    Camera,
    AngularFireDatabase
  ]
})
export class AppModule {}