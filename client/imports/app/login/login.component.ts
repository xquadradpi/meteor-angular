import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.scss']
})

export class LoginComponent implements OnInit {

    userId: string;
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit() {

        this.userId = Meteor.userId();

        this.loginForm = this.formBuilder.group({
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(3),
                Validators.pattern('[A-Za-z]{3}')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(6),
                Validators.required
            ]))
        })
    }

    login() {
        let username = this.loginForm.value.username.toLowerCase();
        let password = this.loginForm.value.password;

        if (this.loginForm.valid) {
            Meteor.loginWithPassword(username, password, (error) => {
                if (error) {
                    console.log("error")
                } else {
                    Meteor.logout();
                    console.log("logged out")
                }
            })
        } else {
            console.log("login invalid");
        }
    }

    toRegister(): void {
        this.router.navigate(['register']);
    }

    loginGoogle(): void {
        Meteor.loginWithGoogle({}, function (error) {
            if (error) {
                console.log("error");
                console.log(error);
            } else {
            }
        });
    }
}