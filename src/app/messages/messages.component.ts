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
    this.api.getMsgs()
    .subscribe(res => {
      console.log('messages');
      console.log(res);
      this.messages = res;
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
    return this.api.getMsgs();
  }

  disconnect() {

  }
}
