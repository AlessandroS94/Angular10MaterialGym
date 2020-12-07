import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';
import {ConfirmComponent} from '../../components/confirm/confirm.component';
import {AlimentiService} from '../../services/alimenti.service';

@Component({
  selector: 'app-crea-alimenti',
  templateUrl: './crea-alimenti.component.html',
  styleUrls: ['./crea-alimenti.component.scss']
})
export class CreaAlimentiComponent implements OnInit {

  form = new FormGroup(
      {
        nome: new FormControl(''),
        descrizione: new FormControl(''),
        grassi: new FormControl(Number),
        proteine: new FormControl(Number),
        carboidrati: new FormControl(Number),
      }
  );

  public isLoading = false;
  // @ts-ignore
  private authService: AuthService = new AuthService();

  constructor(private fb: FormBuilder,
              private alimentoService: AlimentiService,
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
      grassi: [
        null,
        [
          Validators.required,
        ]
      ],
      proteine: [
        null,
        [
          Validators.required,
        ]
      ],
      carboidrati: [
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
    if (this.form.valid) {
      this.alimentoService.addAlimento(this.form.value).subscribe(
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
        this.alimentoService.isSuccess.next(false);
        this.router.navigate(['']);
      }
    });
  }
}
