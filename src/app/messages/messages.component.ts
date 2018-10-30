import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
 class Message {
   from: string;
   completed: boolean;
   message: string; 
   encMessage: string; 
   key: number;
   attempts: number;
  //  timeSent: Date; 
    constructor(from: string, message: string, encMessage: string,
      key: number){
        this.from = from;
        this.completed = false;
        this.message = message;
        this.encMessage = encMessage;
        this.key = key;  
        this.attempts = 10;
    }
 }
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  
  messages: Message[] = [];
  dataSource = new MsgDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.dataSource.connect()
    .subscribe(res => {
      //console.log('messages');
      //console.log(res);
      this.messages = res;
    }, err => {
      console.log(err);
    });

    let message1 = new Message("Paul", "abc", "bcd", 1 );
      this.messages.push(message1);
    let message2 = new Message("Terry", "abc", "bcd", 1 );
      this.messages.push(message2);
    let message3 = new Message("Jerry", "abc", "bcd", 1 );
      this.messages.push(message3);
    let message4 = new Message("Jerrys", "abc", "bcd", 1 );
      this.messages.push(message4);
    let message5 = new Message("Jerry6", "abc", "bcd", 1 );
      this.messages.push(message5);
    
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
