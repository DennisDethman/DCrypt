import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  usr: any;
  id: any;
  message: any;
  sentMessage: any;
  solution: string
  msgScore: number;
  gameScore: number;
  solved: boolean = false; 
  failed: boolean = false; 
  incorrect: boolean = null;

  constructor (private activeRoute: ActivatedRoute,
               private auth: AuthenticationService,
               private router: Router,
               private api: ApiService) { }

  ngOnInit() {
    solution: '';
    msgScore: 0;
    gameScore: 0;

    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.grabData()
  }

  grabData() {

    this.api.getRecvdMsg(this.id)
    .subscribe(res => {
      this.message = res;

      this.api.getSentMsg(this.message.SentMsg_id)
      .subscribe(res => {
        this.sentMessage = res;
        console.log(this.sentMessage)
      });

      this.api.getUser(this.message.Receiver_id)
      .subscribe(res => {
        this.usr = res;
        this.gameScore = this.usr.gameScore;
      });
    });
  }

  onBack(): void {
    this.router.navigate(['messages']);
  }

  keySound(){
    let keyAudio = new Audio;
    keyAudio.src = "./././assets/audio/key.mp3";
    keyAudio.load();
    keyAudio.play();
  }

  greenSound(){
    let greenAudio = new Audio;
    greenAudio.src = "./././assets/audio/function.mp3";
    greenAudio.load();
    greenAudio.play();
  }

  doCrypt() {
    this.keySound();
    const chooseCypher = (<HTMLInputElement>document.getElementById("cypher")).value;

    if (chooseCypher === "cCrypt") {
      this.cCrypt();
    }

    if (chooseCypher === "cCrypt2") {
      this.cCrypt2();
    }

    if (this.message.AttemptsRemaining < 1) {
      this.failed = true; 
    }

    if (this.solution !== this.message.DecryptedMsg){
      this.incorrect = true; 
      this.greenSound();
    }

    if (this.solution === this.message.DecryptedMsg) {
      this.incorrect = false;
      this.message.Solved = true;
      this.sentMessage.Solved = true;
      this.solved = true;
      this.msgScore = this.message.AttemptsRemaining * 10;
      console.log('msgScore: ')
      console.log(this.msgScore);
      this.message.MessageScore = this.msgScore;

      this.sentMessage.MessageScore = this.msgScore;
      this.gameScore += this.msgScore;
      console.log('gameScore: ')
      console.log(this.gameScore)
      this.usr.gameScore = this.gameScore;
      this.updateGameScore();
      //this.message.AttemptsRemaining = 1;
      //this.sentMessage.AttemptsRemaining = 1;
    }

    this.message.AttemptsRemaining--;
    this.sentMessage.AttemptsRemaining--;

    this.api.updateRecvdMsg(this.id, this.message)
      .subscribe(res => {
      }, (err) => {
      console.log(err);
      }
    );

    this.api.updateSentMsg(this.message.SentMsg_id, this.sentMessage)
    .subscribe(res => {
    }, (err) => {
    console.log(err);
    });
  }

  updateGameScore() {
    this.api.updateUser(this.usr._id, this.usr)
      .subscribe(res => {
      }, (err) => {
      console.log(err);
      }
    );
  }
  
  cCrypt() {
    var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
    // if (!/^-?\d+$/.test(shiftText)) {
    //   alert("Shift is not an integer");
    //   return;
    // }

    var shift = parseInt(shiftText, 10);
    // if (shift < 0 || shift >= 26) {
    //   alert("Shift is out of range");
    //   return;
    // }

    shift = (26 + shift) % 26;
    
    var textElem = (<HTMLElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    textElem.textContent = this.caesarShift(encMessage.textContent, shift);
    this.solution = this.caesarShift(encMessage.textContent, shift);
    //console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
  }

  cCrypt2() {
    var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
    // if (!/^-?\d+$/.test(shiftText)) {
    //   alert("Shift is not an integer");
    //   return;
    // }

    var shift = parseInt(shiftText, 10);
    // if (shift < 0 || shift >= 26) {
    //   alert("Shift is out of range");
    //   return;
    // }

    shift = (26 - shift) % 26;

    var textElem = (<HTMLElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    textElem.textContent = this.caesarShift(encMessage.textContent, shift);
    this.solution = this.caesarShift(encMessage.textContent, shift);
    //console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
  }
  
  caesarShift(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var c = text.charCodeAt(i);
      if      (65 <= c && c <=  90) result += String.fromCharCode((c - 65 + shift) % 26 + 65);  // Uppercase
      else if (97 <= c && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97);  // Lowercase
      else                          result += text.charAt(i);  // Copy
    }
    return result;
  }
}
