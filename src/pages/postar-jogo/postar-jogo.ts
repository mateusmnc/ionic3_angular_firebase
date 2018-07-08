import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataExchangerProvider } from '../../providers/data-exchanger/data-exchanger';

@Component({
  selector: 'page-postar-jogo',
  templateUrl: 'postar-jogo.html'
})

export class PostarJogoPage {
  public myGameForm: FormGroup;
  public gameImage:any = '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png';

  constructor(public navCtrl: NavController,
              private dataExchanger: DataExchangerProvider,
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
      return;
    }
    if(this.gameImage === '/assets/img/jcXeeNUSjChM4b9PJ2Hg_placeholder.png'){
      console.log('tire uma foto do seu jogo');
      return;
    }
    console.log(this.myGameForm);
    this.myGameForm.value.gameImage = this.gameImage;
    this.dataExchanger
      .publishGameOffer(this.myGameForm.value)
      .then(
        (post) => {
          console.log('post sent, return in the promisse: ');
          console.log(post);
          this.navCtrl.parent.select(1);
        },
        (error) => {
          console.log('deu error');
          console.log(error);
        });
      
  }
}
