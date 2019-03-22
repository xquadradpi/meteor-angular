# Kickstarter for Meteor-Angular

## Install

- ##### Install Meteor:

    ```$ curl https://install.meteor.com/ | sh ```
- ##### Clone Project
    
    ```$ git clone git@github.com:xquadradpi/meteor-angular.git```
- ##### Change to folder and install all packages
    
    ```$ npm install```

    ```$ meteor npm install```
    
- ##### Start Project

    ```$ meteor```
    
    Start with Docker:
    
    ```$ docker-compose up -d```
    
    
## Structure

   `both` Code will executed both client and serverside
        <br>
   `client` Clientside code 
        <br>
   `server` Serverside code
        <br>
        <br>
   `public` Folder for images, css... ( Assets )
        <br>
   `tests` Test environment
   

## Models

#### Create Model
  Folder `both > models`
  <br>
  Create file <b>group.models.ts</b>
  <br>
  ```
    export interface Group {
        _id?: string,
        name: string,
        members: string[],
        public: boolean
    }
  ```
  
#### Use Models

    Add:
    <br>
    `import {Group} from "../../../../both/models/group.models";`  

## Collection

#### Create Collection

 Folder: `both>collections`
  <br>
  Create file <b>groups.collection.ts</b>
  
  ```
    export const Groups = new MongoObservable.Collection<Group>('groups');
    
    if(Meteor.isClient) {
        Meteor.subscribe("groups");
    }
  ```
  
  Add Collection to publication
  <br>
  Folder `server > imports > publications`:
  <br>
  Create file <b>groups.publication.ts</b>
  
  ```
  Meteor.publish("groups", ()  => {
      return Groups.find();
  });
  
  Meteor.publish("group", (groupId: string) => {
      return Groups.findOne({groupId});
  });
  ```
  
#### Use Collection
  
##### Get list of entries

Define variables
<br>
`groupSubs: Subscription;`   // RXJS
<br>
`groups: Observable<Group[]>;` // RXJS

Get entries
```
 this.groupsSub = MeteorObservable.subscribe("groups").subscribe(() => {
      this.groups = Groups.find({});
  });
```

##### Get Single entrie

Define variables
<br>
`groupSub: Subscription;`
<br>
`group: Group;`

Get entries:
```
this.groupSub = MeteorObservable.subscribe("groups").subscribe(() => {
  Tracker.autorun(() => {
    this.zone.run(() => { 
        this.group = Groups.findOne({_id: this.groupId}); // {groupId] -> only if its ID
    });
  });
```

Get params:
```
this.paramsSub = this.route.params.subscribe(params => {
  this.groupId = params['groupId'];
        
  // NEST GET Entries HERE!
});
```

#### Routes
Folder `client > imports > app`
<br>
File `app.routes.ts`

No parameters:
<br>
`{ path: 'groups', component: GroupListComponent }`
<br>
With parameters:
<br>
`{ path: 'groups/edit/:groupId', component: GroupEditComponent }`
<br>
Multiple parameters:
<br>
`{ path: 'groups/show/:groupId/:userId', component: GroupShowComponent },`