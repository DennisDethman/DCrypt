import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  details: UserDetails;
  tokenpayload: TokenPayload;
  //constructor() { }
  constructor(private auth: AuthenticationService, private router: Router) {}
  
  ngOnInit() {

  }

}
