import { Component, OnInit } from '@angular/core';
import * as Moment from 'moment';
import { Observable } from 'rxjs';
import { Chats, Messages, ChatsReactive } from '../../../../imports/collections';
import { Chat, MessageType } from '../../../../imports/models';
import template from './chats.html';

import { MeteorReactive } from 'angular2-meteor';

@Component({
  template
})
export class ChatsPage extends MeteorReactive implements OnInit {
  chats;
  chatsReactive: Mongo.Cursor<Chat>;

  constructor() {
    super();

    this.subscribe('chats-reactive-subscription');
    this.chatsReactive = ChatsReactive.find();
    this.autorun(() => {
      console.log(this.chatsReactive.fetch());
    });
  }

  ngOnInit() {
    this.chats = Chats
      .find({})
      .mergeMap((chats: Chat[]) =>
        Observable.combineLatest(
          ...chats.map((chat: Chat) =>
            Messages
              .find({chatId: chat._id})
              .startWith(null)
              .map(messages => {
                if (messages) chat.lastMessage = messages[0];
                return chat;
              })
          )
        )
      ).zone();
  }

  removeChat(chat: Chat): void {
    Chats.remove({_id: chat._id}).subscribe(() => {});
  }
}