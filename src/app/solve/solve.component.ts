import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CLEAN_PROMISE } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  id: any;
  message: any;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private api: ApiService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.api.getRecvdMsg(this.id)
    .subscribe(res => {
      this.message = res;
      console.log(this.message)
    })
  }

  onBack(): void {
    this.router.navigate(['messages']);
 }
    
  doCrypt(isDecrypt){
    // console.log(lngDetector.detect('This is a test.'));
    
    const solution = (<HTMLElement>document.getElementById("message")).textContent;
    const chooseCypher = (<HTMLInputElement>document.getElementById("cypher")).value;
    
    if(chooseCypher === "cCrypt"){
      this.cCrypt(isDecrypt);
    }
    if(chooseCypher === "cCrypt2"){
      this.cCrypt2(isDecrypt);
    }
    this.message.AttemptsRemaining--
    console.log( solution + " " + this.message.DecryptedMessage)
    if (solution === this.message.DecryptedMessage){
      this.message.Solved = true;
      //this.message.MessageScore = 100;
      console.log("You Win!");
    }
    this.api.updateRecvdMsg(this.id, this.message);
    // if (solution !== this.messages[0].message){
    //   alert("You lOOSE!");
    // }
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
    
    var textElem = (<HTMLElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    textElem.textContent = this.caesarShift(encMessage.textContent, shift);
    console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
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

    var textElem = (<HTMLElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    textElem.textContent = this.caesarShift(encMessage.textContent, shift);
    console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
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
