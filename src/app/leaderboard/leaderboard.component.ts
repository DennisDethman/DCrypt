import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthenticationService } from '../authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  gameStats: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getGameStats()
    .subscribe(res => {
      this.gameStats = res;
      console.log(res);
    }) 
  }
}
