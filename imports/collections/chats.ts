import { MongoObservable } from 'meteor-rxjs';
import { Chat } from '../models';

//export const Chats = new MongoObservable.Collection<Chat>('chats');

//export const Chats = new MongoObservable.Collection<Chat>('chats');
//export const ChatsReactive = Chats.collection;

export const ChatsReactive = new Mongo.Collection('chats');
export const Chats = new MongoObservable.Collection<Chat>(ChatsReactive);

if (Meteor.isServer) {
  Meteor.publish('chats-reactive-subscription', function() {
    return ChatsReactive.find();
  });
}