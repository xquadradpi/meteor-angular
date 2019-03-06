export interface User extends Meteor.User {
    _id?: string,
    profile?: {
        name: string
    }
}