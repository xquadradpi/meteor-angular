import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Subscription} from 'rxjs';
import {MessageService} from "primeng/api";

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    toastStyle: any;

    constructor(
        private messageService: MessageService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit() {
        this.toastStyle = {marginTop: '50px'};
    }

    ngOnDestroy() {

    }
}
