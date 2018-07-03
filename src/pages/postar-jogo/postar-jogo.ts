import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-postar-jogo',
  templateUrl: 'postar-jogo.html'
})

export class PostarJogoPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  public myGameForm: FormGroup;
  public gameImage:any = '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png';

  constructor(public navCtrl: NavController,
              public auth: AuthProvider, 
              private camera: Camera,
              private formBuilder:FormBuilder ) {
                
    this.myGameForm = this.formBuilder.group({
      gameName: ['', Validators.compose([Validators.required])],
      platform: ['', Validators.compose([Validators.required])],
      place:['', Validators.compose([Validators.required])]
    })
  }
            
  takePicture(){
    const option: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }    
    this.camera.getPicture(option).then((imageData) => {
      this.gameImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      
    });
  }

  publishGameOffer(){
    if(!this.myGameForm.valid){
      console.log('nao é valido');
    }
    if(this.gameImage === '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'){
      console.log('tire uma foto do seu jogo');
    }
    console.log(this.myGameForm);
    this.myGameForm.value.gameImage = this.gameImage;
    this.auth
      .publishGameOffer(this.myGameForm.value)
      .then(
        (post) => {
          console.log('post sent, return in the promisse: ');
          console.log(post);
        },
        (error) => {
          console.log('deu error');
          console.log(error);
        });
      
  }
}
