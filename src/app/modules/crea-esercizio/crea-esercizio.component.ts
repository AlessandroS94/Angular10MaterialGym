import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EsercizioService} from '../../services/esercizio.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConfirmComponent} from '../../components/confirm/confirm.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-crea-esercizio',
    templateUrl: './crea-esercizio.component.html',
    styleUrls: ['./crea-esercizio.component.scss']
})
export class CreaEsercizioComponent implements OnInit {

    form = new FormGroup(
        {
            nome: new FormControl(''),
            descrizione: new FormControl(''),
            url: new FormControl(''),
            ripetizioni: new FormControl(''),
            pesi: new FormControl(''),
        }
    );

    public isLoading = false;
    private authService: AuthService;

    constructor(private fb: FormBuilder,
                private esercizioService: EsercizioService,
                private router: Router,
                public snack: MatSnackBar,
                public dialog: MatDialog) {
    }

    private initLoginForm(): void {
        this.form = this.fb.group({
            nome: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(20)
                ]
            ],
            descrizione: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ]
            ],
            url: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ]
            ],
            ripetizioni: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ]
            ],
            pesi: [
                null,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(12)
                ]
            ],
        });
    }

    ngOnInit(): void {
      // tslint:disable-next-line:typedef
        if (!this.authService.loggedIn.getValue()) {
            this.router.navigate(['/login']);
        }
        this.initLoginForm();

    }

    public insert() {

        this.esercizioService.insert(this.form.value).subscribe(
            (data: any) => {
                this.isLoading = false;
                if (data) {
                    this.esercizioService.isSuccess.next(true);
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
                this.isLoading = false;
            }
        );
    }

    // tslint:disable-next-line:typedef
    public list(){
        const response = this.esercizioService.findAll().subscribe(res => {
            console.log(res);
        });
        console.log(response);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ConfirmComponent, {
            width: '250px',
            data: {
                title: 'Esercizioo',
                message: 'Qualcosa è andato storto',
                buttonCancel: 'Riprova',
                buttonOk: 'Torna alla Home'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.esercizioService.isSuccess.next(false);
                this.router.navigate(['']);
            }
        });
    }

}
