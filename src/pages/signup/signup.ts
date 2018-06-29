import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public signupForm: FormGroup;

  constructor(public navCtrl: NavController,
              public auth:AuthProvider, 
              public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {

    this.signupForm = this.formBuilder.group({
      emailFld: ['', Validators.compose([Validators.required, Validators.email])],
      passwordFld: ['', Validators.compose([Validators.required])],
      usernameFld: ['', Validators.compose([Validators.required])]
    });
  }
  submitSignUpForm(){
    if(!this.signupForm.valid){
      console.log("form invalido");
      console.log(this.signupForm.value);
      return;
    }
    this.auth.signUpUser(this.signupForm.value.usernameFld, 
                         this.signupForm.value.emailFld, 
                         this.signupForm.value.passwordFld)
             .then(
                authData =>{
                  this.loadingCtrl.create().dismiss().then(() =>{
                    this.navCtrl.setRoot(TabsControllerPage);
                  })
                },
                error => {
                  let alert = this.alertCtrl.create({
                    message: error.message,
                    buttons: [{
                      text: 'ok',
                      role: 'cancel'
                    }]
                });
                alert.present();
            });
    // this.auth.signUpUser
  }
  // goToTrocarJogo(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(TrocarJogoPage);
  // }
}
