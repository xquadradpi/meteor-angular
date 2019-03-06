import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from '@angular/router';
import {DateValueAccessorModule} from 'angular-date-value-accessor';
import {CKEditorModule} from 'ngx-ckeditor';

import {ConfirmationService, MessageService} from "primeng/api";
import {primeModules} from "./prime.modules";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {routes} from './app.routes';
import {GLOBALS} from "./globals";
import {ToastService} from "./_services/toast.service";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NaviComponent} from "./navi/navi.component";
import {SERVICE_DECLARATIONS} from "./_services/_export.service";
import {LOGIN_DECLARATIONS} from "./login/login.export";


@NgModule({
    imports: [
        BrowserAnimationsModule,
        // Transition between server and client
        BrowserModule.withServerTransition({
            appId: 'Numenera',
        }),
        FormsModule,
        RouterModule.forRoot(routes),
        NgbModule.forRoot(),
        ReactiveFormsModule,
        DateValueAccessorModule,
        CKEditorModule,
        primeModules,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NaviComponent,
        ...SERVICE_DECLARATIONS,
        ...LOGIN_DECLARATIONS,
    ],
    // Providers
    providers: [
        GLOBALS,
        MessageService,
        ConfirmationService,
        ToastService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
}
