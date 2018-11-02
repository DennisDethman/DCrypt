import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'dcrypt';
  
  constructor(public auth: AuthenticationService) {}
  buttonSound(){
    let buttonAudio = new Audio;
    buttonAudio.src = "././assets/audio/buttonSound.mp3";
    buttonAudio.load();
    buttonAudio.play();
  }
   bgAudio = new Audio();
   bgAudio2 = new Audio();
   bgAudio3 = new Audio();
   bgAudio4 = new Audio();

  bgMusic(){
    this.bgAudio2.pause();
    this.bgAudio3.pause();
    this.bgAudio4.pause();

    this.bgAudio.src = "././assets/audio/bgmusica.mp3";
    this.bgAudio.load();
    this.bgAudio.play();
    this.bgAudio.loop = true;
  }
  bgMusic2(){
    this.bgAudio.pause();
    this.bgAudio3.pause();
    this.bgAudio4.pause();

    this.bgAudio2.src = "././assets/audio/bgmusica2sm.mp3";
    this.bgAudio2.load();
    this.bgAudio2.play();
    this.bgAudio2.loop = true;
  }
  bgMusic3(){
    this.bgAudio2.pause();
    this.bgAudio.pause();
    this.bgAudio4.pause();

    this.bgAudio3.src = "././assets/audio/bgmusica3sm.mp3";
    this.bgAudio3.load();
    this.bgAudio3.play();
    this.bgAudio3.loop = true;
  }
  bgMusic4(){
    this.bgAudio.pause();
    this.bgAudio3.pause();
    this.bgAudio2.pause();

    this.bgAudio4.src = "././assets/audio/bgmusica4sm.mp3";
    this.bgAudio4.load();
    this.bgAudio4.play();
    this.bgAudio4.loop = true;
  }
  noMusic(){
    this.bgAudio2.pause();
    this.bgAudio3.pause();
    this.bgAudio4.pause();
    this.bgAudio.pause();
  }
 ngOnInit(){
   
 }

}
