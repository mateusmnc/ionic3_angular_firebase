import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, Loading } from 'ionic-angular';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public loginForm: FormGroup;
  private loading: Loading;
  
  constructor(public navCtrl: NavController, 
              private auth: AuthProvider,
              private formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {

    this.loginForm = this.formBuilder.group({
      emailFld:['', Validators.compose([Validators.required, Validators.email])],
      passwordFld:['', Validators.compose([Validators.required])]
    });
    this.loading = this.loadingCtrl.create();
  }

  async submitLoginForm(): Promise<void>{
    if(!this.loginForm.valid){
      console.log('não é valido');
      return;
    }
    this.auth.loginUser(this.loginForm.value.emailFld, this.loginForm.value.passwordFld)
    .then((lgUser) => {
      console.log('usuario loggado 1');
      console.log(lgUser);

        console.log('fez o dismiss()');
        this.navCtrl.setRoot(TabsControllerPage);

    })
    .catch((rejected) => {
      console.log('erro no loggin 1');

        const alert = this.alertCtrl.create({
                                    message: rejected.message,
                                    buttons: [{
                                      text: 'ok',
                                      role: 'cancel'}]
                                  });
        alert.present();
      console.log(rejected);
    });  
  }
  goToSignUp(){
    this.navCtrl.push(SignupPage);
  }
}
