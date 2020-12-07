import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

import {AuthService} from '../../services/auth.service';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {ConfirmComponent} from '../../components/confirm/confirm.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: []
})

export class LoginComponent implements OnInit {
    public form: FormGroup;
    public isLogin = false;


    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        public snack: MatSnackBar,
        public dialog: MatDialog
    ) {
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.router.navigate(['/dashboard']);
        }

        this.initLoginForm();
    }

    private initLoginForm(): void {
        this.form = this.fb.group({
            user_name: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(20)
                ]
            ],
            password: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ]
            ]
        });
    }

    // tslint:disable-next-line:typedef
    public isFieldInvalid(field: string) {
        if (this.form.get(field).touched) {
            return !this.form.get(field).valid;
        }
    }

    // tslint:disable-next-line:typedef
    public login() {
        if (this.form.valid) {
            this.isLogin = true;
            this.authService.login(this.form.value).subscribe(
                (data: any) => {
                    this.isLogin = false;
                    if (data) {
                        this.authService.loggedIn.next(true);
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('role', data.roles[0]);
                        localStorage.setItem('email', data.email);
                        localStorage.setItem('id', data.id);
                        this.router.navigate(['/dashboard']);
                    } else {
                        this.snack.openFromComponent(SnackbarComponent, {
                            data: {data},
                            duration: 3000
                        });
                    }
                },
                (error) => {
                    this.openDialog();
                    console.log(error);
                    this.isLogin = false;
                }
            );
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ConfirmComponent, {
            width: '250px',
            data: {
                title: 'Login',
                message: 'Username o password non corrette',
                buttonCancel: 'Riprova',
                buttonOk: 'Torna alla Home'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.authService.loggedIn.next(false);
                this.router.navigate(['']);
            }
        });
    }

}
