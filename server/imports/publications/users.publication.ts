import {Meteor} from 'meteor/meteor';

Meteor.publish("userdata", function (userId) {
    return Meteor.users.find(userId, {
        fields: {}
    });
});

Meteor.publish("username", function (userId) {
    return Meteor.users.find({_id: userId},
        {fields: {'profile': 1}});
});

Meteor.publish('userList', function () {
    return Meteor.users.find({}, {fields: {'_id': 1, 'profile': 1}});
});