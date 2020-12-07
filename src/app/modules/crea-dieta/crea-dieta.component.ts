import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Scheda} from '../../models/scheda';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UtentiService} from '../../services/utenti.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {ConfirmComponent} from '../../components/confirm/confirm.component';
import {Dieta} from '../../models/dieta';
import {AlimentiService} from '../../services/alimenti.service';
import {Alimento} from '../../models/alimento';
import {DietaService} from '../../services/dieta.service';

@Component({
  selector: 'app-crea-dieta',
  templateUrl: './crea-dieta.component.html',
  styleUrls: ['./crea-dieta.component.scss']
})
export class CreaDietaComponent implements OnInit {

  isLoading = false;
  dataUtenti;
  dataAlimenti;
  alimentiList: Alimento[] = [];
  utenteChecked: User;
  dieta: Dieta;

  form = new FormGroup(
      {
        nome: new FormControl(''),
        info: new FormControl(''),
        kcal: new FormControl(''),
        data_scadenza: new FormControl(''),
        alimenti: new FormControl(false),
        utenti: new FormControl('')
      }
  );

  constructor(public utentiService: UtentiService,
              public alimentiService: AlimentiService,
              public authService: AuthService,
              public dietaService: DietaService,
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
    this.getAllAlimenti();
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
      info: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
        ]
      ],
      kcal: [
        null,
        [
          Validators.required,
        ]
      ],
      data_scadenza: [
        null,
        [
          Validators.required,
        ]
      ],
      alimenti: [],
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
  public getAllAlimenti() {
    this.alimentiService.findAll().subscribe(res => {
      // @ts-ignore
      this.dataAlimenti = res;
    });
  }

  // tslint:disable-next-line:typedef
  public insert() {
    this.form.value.utente = this.utenteChecked;
    this.form.value.alimenti = this.alimentiList;
    if (this.form.valid && this.alimentiList.length > 0 && this.utenteChecked != null) {
      // @ts-ignore
      this.dietaService.addDieta(this.form.value).subscribe(
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
  public updateInsertAlimenti(alimento, event) {

    if (event.checked) {
      this.alimentiList.push(alimento);
    } else {

      // tslint:disable-next-line:no-shadowed-variable
      for ( const element of this.alimentiList) {
        if (element.id === alimento.id) {
          // @ts-ignore
          this.alimentiList.pop(alimento);
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
        this.alimentiService.isSuccess.next(false);
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
