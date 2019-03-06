import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MeteorObservable} from "meteor-rxjs";

import {NaviEntry} from '../../../../both/models/navi.model';
import {GLOBALS} from '../globals';

@Component({
    selector: 'navigation',
    templateUrl: 'navi.component.html',
    styleUrls: ['navi.scss']
})

export class NaviComponent implements OnInit {

    toggleNav: boolean = false;

    naviEntries: NaviEntry[];
    visitor: boolean = true;
    user: boolean = false;
    admin: boolean = false;

    constructor(
        private router: Router,
        private globals: GLOBALS
    ) {
    }

    ngOnInit() {
        /*
         * Push Items to the Navigation
         */
        MeteorObservable.autorun().subscribe(() => {
            this.user = !!Meteor.userId();

            this.naviEntries = [];
            this.naviEntries.push({name: 'Home', link: ''});

        });
    }


    navigateTo(link: string) {
        this.router.navigate(['/' + link]);
    }

    toggleNavbar() {
        this.toggleNav = !this.toggleNav;
    }
}