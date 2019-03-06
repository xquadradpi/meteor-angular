import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ToastModel} from "./toast/toast.model";

@Injectable()
export class ToastService {
    private messageSource = new BehaviorSubject<ToastModel>({msg: "test", type: "info", show: false});
    currentMessage = this.messageSource.asObservable();

    constructor() {
    }

    add(toast: ToastModel) {
        this.messageSource.next(toast)
    }
}