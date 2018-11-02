import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  usr: any;
  messages: any;
  dataSource = new MsgDataSource(this.api);

  constructor(private api: ApiService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.usr = this.auth.getUserDetails;

    this.dataSource.connect(this.usr._id)
    .subscribe(res => {
      this.messages = res;
      console.log(this.messages);
    }, err => {
      console.log(err);
    });
  }
 
}

export class MsgDataSource extends DataSource<any> {
  usr : any;

  constructor(private api: ApiService) {
    super()
  }

  connect(id) {
    console.log(id);
    return this.api.getRecvdMsgs();
  }

  disconnect() {

  }
}
