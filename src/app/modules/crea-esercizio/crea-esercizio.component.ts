import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EsercizioService} from '../../services/esercizio.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConfirmComponent} from '../../components/confirm/confirm.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';


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
            kg: new FormControl(''),
        }
    );

    public isLoading = false;
    // @ts-ignore
    private authService: AuthService = new AuthService();

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
                    Validators.minLength(3),
                ]
            ],
            url: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                ]
            ],
            ripetizioni: [
                null,
                [
                    Validators.required,
                ]
            ],
            kg: [
                null,
                [
                    Validators.required,
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

    // tslint:disable-next-line:typedef
    public insert() {
        if (this.form.valid)
        {
            this.esercizioService.addEsercizio(this.form.value).subscribe(
                (data: any) => {
                    this.isLoading = false;
                    this.snack.openFromComponent(SnackbarComponent, {
                        data: 'Salvato',
                        duration: 3000
                    });
                },
                (error) => {
                    this.openDialog();
                    console.log(error);
                    this.isLoading = false;
                }
            );
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ConfirmComponent, {
            width: '250px',
            data: {
                title: 'Esercizio',
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
