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
  viewRcvd: boolean = true;
  viewSent: boolean = false;
  msgRcvd_id : string;
  rcvdSource = new MsgRcvdSource(this.api);
  sentSource = new MsgSentSource(this.api);

  constructor(private api: ApiService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.usr = this.auth.getUserDetails();

    this.msgsReceived();
  }

  msgsReceived() {
    this.viewSent = false;
    this.viewRcvd = true;
    this.rcvdSource.connect(this.usr._id)
    .subscribe(res => {
      this.messages = res;
      this.msgRcvd_id = this.messages.SentMsg_id;
    }, err => {
      console.log(err);
    });
  }

  msgsSent() {
    this.viewRcvd = false;
    this.viewSent = true;
    this.sentSource.connect(this.usr._id)
    .subscribe(res => {
      this.messages = res;
    }, err => {
      console.log(err);
    });
  }

  msgDelete(id) {
    this.api.deleteSentMsg(id)
    .subscribe(res => {
      console.log('delete sent messsage')
    });

    // this.api.deleteRcvdMsg(id)
    // .subscribe(res => {
    //   console.log('delete rcvd messsage')
    // });
  }
}

export class MsgRcvdSource extends DataSource<any> {
  usr : any;

  constructor(private api: ApiService) {
    super()
  }

  connect(id) {
    return this.api.getRecvdMsgs(id);
  }

  disconnect() {

  }
}

export class MsgSentSource extends DataSource<any> {
  usr : any;

  constructor(private api: ApiService) {
    super()
  }

  connect(id) {
    return this.api.getSentMsgs(id);
  }

  disconnect() {

  }
}
