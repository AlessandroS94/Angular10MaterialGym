import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {EsercizioService} from '../../services/esercizio.service';
import {UtentiService} from '../../services/utenti.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ConfirmComponent} from '../../components/confirm/confirm.component';
import {MatDialog} from '@angular/material/dialog';
import {Scheda} from '../../models/scheda';
import {SchedaService} from '../../services/scheda.service';
import {Esercizio} from '../../models/esercizio';
import {User} from '../../models/user';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';


@Component({
    selector: 'app-crea-scheda',
    templateUrl: './crea-scheda.component.html',
    styleUrls: ['./crea-scheda.component.scss']
})
export class CreaSchedaComponent implements OnInit {

    isLoading = false;
    dataUtenti;
    dataEsercizi;
    eserciziList: Esercizio[] = [];
    utenteChecked: User;
    scheda: Scheda;

    form = new FormGroup(
        {
            nome: new FormControl(''),
            descrizione: new FormControl(''),
            dataInserimento: new FormControl(''),
            info: new FormControl(''),
            esercizi: new FormControl(false),
            utenti: new FormControl('')
        }
    );

    constructor(public utentiService: UtentiService,
                public esercizioService: EsercizioService,
                public authService: AuthService,
                public schedaService: SchedaService,
                private fb: FormBuilder,
                private router: Router,
                public snack: MatSnackBar,
                public dialog: MatDialog) {
    }


    ngOnInit(): void {
        if (!this.authService.loggedIn.getValue()) {
            this.router.navigate(['/login']);
        }
        this.initLoginForm();
        this.getAllUser();
        this.getAllEsercizi();
    }

    private initLoginForm(): void {
        this.form = this.fb.group({
            nome: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(40)
                ]
            ],
            descrizione: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                ]
            ],
            info: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                ]
            ],
            dataInserimento: [
                null,
                [
                    Validators.required,
                ]
            ],
            esercizi: [],
            utente: []
        });
    }

    // tslint:disable-next-line:typedef
    public getAllUser() {
        this.utentiService.findAll().subscribe(res => {
            // @ts-ignore
            this.dataUtenti = res;
        });

    }

    // tslint:disable-next-line:typedef
    public getAllEsercizi() {
        this.esercizioService.findAll().subscribe(res => {
            // @ts-ignore
            this.dataEsercizi = res;
        });
    }

    // tslint:disable-next-line:typedef
    public insert() {
        console.log(this.form.value.dataInserimento);
        this.form.value.utente = this.utenteChecked;
        this.form.value.esercizi = this.eserciziList;
        if (this.form.valid && this.eserciziList.length > 0 && this.utenteChecked != null) {
            // @ts-ignore
            this.schedaService.addScheda(this.form.value).subscribe(
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

    // tslint:disable-next-line:typedef
    public updateInsertEsercizi(esercizio, event) {

        if (event.checked) {
            this.eserciziList.push(esercizio);
        } else {

            // tslint:disable-next-line:no-shadowed-variable
            for ( const element of this.eserciziList) {
                if (element.id === esercizio.id) {
                    // @ts-ignore
                    this.eserciziList.pop(esercizio);
                    return;
                }
            }
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ConfirmComponent, {
            width: '250px',
            data: {
                title: 'Scheda',
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
