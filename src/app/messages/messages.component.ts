import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  messages: any;
  dataSource = new MsgDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dataSource.connect()
    .subscribe(res => {
      this.messages = res;
      console.log(this.messages);
    }, err => {
      console.log(err);
    });
  }
 
}

export class MsgDataSource extends DataSource<any> {
  
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getRecvdMsgs();
  }

  disconnect() {

  }
}
