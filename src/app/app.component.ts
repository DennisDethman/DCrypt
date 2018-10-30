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
  
  bgMusic(){
    var isPlaying = true;
    let bgAudio = new Audio();
    bgAudio.src = "././assets/audio/bgmusic.mp3";
    bgAudio.load();
    bgAudio.play();
    bgAudio.loop = true;


  }
 ngOnInit(){
   this.bgMusic();
 }
//  togglePlay() {
//   if (isPlaying) {
//     bgAudio.pause()
//   } else {
//     myAudio.play();
//   }
// };
// myAudio.onplaying = function() {
//   isPlaying = true;
// };
// myAudio.onpause = function() {
//   isPlaying = false;
// };
}
