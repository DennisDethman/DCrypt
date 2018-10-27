import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  details: {};
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUser()
    .subscribe(user => {
      console.log('user');
      console.log(user);
      this.details = user[0];
      console.log('details');
      console.log(this.details);
    }, err => {
      console.log(err);
    });
  }

}
