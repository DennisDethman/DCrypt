import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    alias: ''
  };

  regErrResponse: string;

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe((res) => {
      console.log(res)
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
