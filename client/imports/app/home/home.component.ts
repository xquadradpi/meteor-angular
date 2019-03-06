import {Component, NgZone, OnInit, Output, EventEmitter} from "@angular/core";
import {Subscription} from 'rxjs';
import {Meteor} from 'meteor/meteor';
import {MeteorObservable} from "meteor-rxjs";


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.scss']
})

export class HomeComponent implements OnInit {

    constructor(
        private zone: NgZone,
    ) {
    }

    ngOnInit() {

    }

}