import { Component, OnInit } from '@angular/core';

import {  FormGroup, FormControl , Validators} from '@angular/forms';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
getOffer() {
throw new Error('Method not implemented.');
}
  images:string[]=[
    'https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/unlimited-entertainment-desk.webp',
    'https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/Non-Stop-Streaming_Desktop.webp',
    'https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/ultrafast-desktop-new.webp',
    
  ]
  currentImageIndex=0;
  ngOnInit(){
    this.imageRotation();
  }
  formSubmit(){
    
  }
  imageRotation(){
    setInterval(()=>{
      this.rotateImage();
    },3000);
  }
  rotateImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }


}
