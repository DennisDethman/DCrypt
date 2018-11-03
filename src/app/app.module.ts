import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { SolveComponent } from './solve/solve.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { ApiService } from './api.service';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'solve/:id', component: SolveComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ProfileComponent,
    ChallengeComponent,
    LeaderboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SolveComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    NgbModule.forRoot()
  ],
  providers: [    
    AuthenticationService, 
    AuthGuardService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
