import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

class Challenge {
  text: string;
  from: string;
  to: string;
  encryptionKey: number; 
  encryptedText: string; 
  attempts: number;
  solved: boolean;
}
@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  newMessage: string = ""
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    }
  
  doCrypt(isDecrypt){
    // console.log(lngDetector.detect('This is a test.'));
    const chooseCypher = (<HTMLInputElement>document.getElementById("cypher")).value;
    if(chooseCypher === "cCrypt"){
      this.cCrypt(isDecrypt);
    }
    if(chooseCypher === "cCrypt2"){
      this.cCrypt2(isDecrypt);
    }
  }

  cCrypt(isDecrypt) {
    var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
    if (!/^-?\d+$/.test(shiftText)) {
      alert("Shift is not an integer");
      return;
    }
    var shift = parseInt(shiftText, 10);
    if (shift < 0 || shift >= 26) {
      alert("Shift is out of range");
      return;
    }
    if (isDecrypt)
      shift = (26 + shift) % 26;
    
    var textElem = (<HTMLInputElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    encMessage.textContent = this.caesarShift(textElem.value, shift);
    console.log("text element: " + textElem.value + "--> Encrypted Element: " + encMessage.textContent)
  }
   
  cCrypt2(isDecrypt) {
    var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;
    if (!/^-?\d+$/.test(shiftText)) {
      alert("Shift is not an integer");
      return;
    }
    var shift = parseInt(shiftText, 10);
    if (shift < 0 || shift >= 26) {
      alert("Shift is out of range");
      return;
    }
    if (isDecrypt)
      shift = (26 - shift) % 26;

    var textElem = (<HTMLInputElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    encMessage.textContent = this.caesarShift(textElem.value, shift);
    console.log("text element: " + textElem.value + "--> Encrypted Element: " + encMessage.textContent)
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

  // expoCipher(text, shift){
  //   var shiftText = (<HTMLInputElement>document.getElementById("encryptionKey")).value;

  // }
  createChallenge(){
    var text = (<HTMLInputElement>document.getElementById("message")).value;
    var to = (<HTMLInputElement>document.getElementById("opponent")).value;
    var encText = (<HTMLElement>document.getElementById("encMessage")).textContent;
    var key = (<HTMLInputElement>document.getElementById("encryptionKey")).value;

    var challenge = {
      Sender_id: 'test sender id',
      SentTo_id: 'test SentTo',
      SentTo_Alias: 'test alias',
      DecryptedMsg: text,
      EncryptedMsg: encText,
      EncryptionKey: key,
      AttemptsAllowed: 10,
      AttemptsRemaining: 10,
      Solved: false,
      MessageScore: 0
    }

    this.postTheMessage(challenge)
    console.log(challenge)
  }

  postTheMessage(challenge) {
    this.api.postMsg(challenge).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    }); 
  }
    
}

