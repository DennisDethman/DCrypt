import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service';
import { GameStats } from '../../../models/GameStats';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit {

  id: any;
  message: any;
  gameStats: any;
  solution: any;
  msgScore: number;
  userScore: number;
  newStatsRecord: boolean = false;
  solved: boolean = false; 
  failed: boolean = false; 

  constructor (private activeRoute: ActivatedRoute,
               private auth: AuthenticationService,
               private router: Router,
               private api: ApiService) { }

  ngOnInit() {
    const usr = this.auth.getUserDetails();

    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.api.getRecvdMsg(this.id)
    .subscribe(res => {
      this.message = res;
    });

    this.api.getGameStat(usr._id)
    .subscribe(res => {
      this.gameStats = res;
    });

    if (this.gameStats) {
      console.log('gamestat if');
      this.userScore = this.gameStats.Score;
      console.log(this.userScore);
      console.log(this.gameStats);
    }
    else {
      console.log('didnt exist');
      this.gameStats = {};
      this.newStatsRecord = true;
      this.userScore = 0;
      this.gameStats.alias = usr.alias;
      this.gameStats.User_id = usr._id;
      this.gameStats.Score = 0;
      console.log(this.gameStats);
    }
  }

  onBack(): void {
    this.router.navigate(['messages']);
  }
 
  doCrypt(isDecrypt) {
    const chooseCypher = (<HTMLInputElement>document.getElementById("cypher")).value;
    
    if (chooseCypher === "cCrypt") {
      this.cCrypt(isDecrypt);
    }
    if (chooseCypher === "cCrypt2") {
      this.cCrypt2(isDecrypt);
    }
    this.message.AttemptsRemaining--;

    if (this.message.AttemptsRemaining === 0) {
      this.failed = true; 
    }

    if (this.solution === this.message.DecryptedMsg) {
      
      console.log('entered solved')
      this.message.Solved = true;
      this.solved = true;
      this.msgScore = this.message.AttemptsRemaining * 10;
      this.message.MessageScore = this.msgScore;
      this.gameStats.Score = this.msgScore + this.userScore;
      console.log(this.gameStats)
      this.updateGameStat();
    }

    this.api.updateRecvdMsg(this.id, this.message)
      .subscribe(res => {
      }, (err) => {
      console.log(err);
      }
    );
  }

  updateGameStat() {
    console.log('entered api call')
    console.log(this.gameStats._id)
    console.log(this.gameStats)

    if (!this.newStatsRecord) {
      console.log('existing')
      console.log(this.gameStats)
      this.api.updateGameStat(this.gameStats._id, this.gameStats)
        .subscribe(res => {
          console.log(res)
        }, (err) => {
        console.log(err);
        }
      );
    }
    else {
      console.log('new')
      console.log(this.gameStats)
      this.api.createGameStat(this.gameStats)
        .subscribe(res => {
          console.log(res)
        }, (err) => {
        console.log(err);
        }
      ); 
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
    
    var textElem = (<HTMLElement>document.getElementById("message"));
    var encMessage = (<HTMLElement>document.getElementById("encMessage"));
    textElem.textContent = this.caesarShift(encMessage.textContent, shift);
    this.solution = this.caesarShift(encMessage.textContent, shift);
    //console.log("text element: " + textElem.textContent + "--> Encrypted Element: " + encMessage.textContent)
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
