import {MongoObservable} from 'meteor-rxjs';
import {Meteor} from 'meteor/meteor';

export const Users = MongoObservable.fromExisting(Meteor.users);

if (Meteor.isClient) {
    Meteor.subscribe("users");
}
