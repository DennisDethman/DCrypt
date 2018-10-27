import { Component } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  details: UserDetails;

  constructor(private auth: AuthenticationService) {}
  
  ngOnInit() {    
    console.log('hit profile')
    this.auth.profile().subscribe(user => {
      console.log(user)
      this.details = user;
    }, (err) => {
      console.error(err);
    });
  }
}
