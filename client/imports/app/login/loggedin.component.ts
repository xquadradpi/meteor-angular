import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'loggedin',
    templateUrl: 'loggedin.component.html',
    styleUrls: ['login.scss']
})

export class LoggedinComponent implements OnInit {

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {

    }

    logout() {
        Meteor.logout();
        this.router.navigate(['']);
    }

}