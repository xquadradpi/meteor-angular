import {Component, OnInit, NgZone} from "@angular/core";
import {ToastModel} from "./toast.model";
import {ToastService} from "../toast.service";

@Component({
    selector: 'toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.scss']
})

export class ToastComponent implements OnInit {

    showToast: boolean;
    toastObj: ToastModel;

    constructor(
        private zone: NgZone,
        private toast: ToastService
    ) {
    }

    ngOnInit() {
        this.showToast = false;
        this.toast.currentMessage.subscribe(alert => {
            this.zone.run(() => {
                this.toastObj = alert;
                if (this.toastObj.show === true) {
                    this.toggleAlert();
                }
            })
        })
    }

    getClass() {
        return "alert alert-" + this.toastObj.type
    }

    toggleAlert() {
        this.showToast = !this.showToast;
        setTimeout(() => {
            this.showToast = !this.showToast
        }, 700);
    }
}