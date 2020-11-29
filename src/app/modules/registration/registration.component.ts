import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;
  public isLogin = false;

  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      public snack: MatSnackBar,
  ) { }

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
      ],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ],
      cognome: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]
      ],
      dataNascita: [
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
  public registration() {
    if (this.form.valid) {
      this.isLogin = true;
      this.authService.registration(this.form.value).subscribe(
          (data: any) => {
            this.isLogin = false;
            if (data) {
              this.router.navigate(['/login']);
            } else {
              this.snack.openFromComponent(SnackbarComponent, {
                data: { data },
                duration: 3000
              });
            }
          },
          (error) => {
            console.log(error);
            this.isLogin = false;
          }
      );
    }
  }

}
