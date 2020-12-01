import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { SnackbarComponent } from '../../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {
  public frm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private fb: FormBuilder,
    public snack: MatSnackBar
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.initializeForm();
  }

  // tslint:disable-next-line:typedef
  openSnack(data: any) {
    this.snack.openFromComponent(SnackbarComponent, {
      data: { data },
      duration: 3000
    });
  }

  // tslint:disable-next-line:typedef
  private initializeForm() {
    const IS_EDITING = this.data.action === 'edit';
    const data = this.data.data;

    this.frm = this.fb.group({
      first_name: new FormControl(IS_EDITING ? data.first_name : null, [Validators.required, Validators.minLength(3)]),
      last_name: new FormControl(IS_EDITING ? data.last_name : null, [Validators.required, Validators.minLength(3)]),
      age: new FormControl(IS_EDITING ? data.age : null, [Validators.required, Validators.minLength(1)]),
      gender: new FormControl(IS_EDITING ? data.gender : null, [Validators.required]),
      id: new FormControl(IS_EDITING ? data.id : null)
    });
  }

  public save(form: FormGroup) {
    /*this.clientService.save(form.value).subscribe((data: any) => {
      this.openSnack(data);

      if (data.success) {
        this.dialogRef.close(true);
      }
    });*/
  }

  // tslint:disable-next-line:typedef
  public getNameErrorMessage() {
    return this.frm.controls.first_name.hasError('required') ? 'First name is required' :
      this.frm.controls.name.hasError('minlength') ? 'Al menos 2 caracteres' : '';
  }

  // tslint:disable-next-line:typedef
  public getLastNameErrorMessage() {
    return this.frm.controls.last_name.hasError('required') ? 'Last name is required' :
      this.frm.controls.name.hasError('minlength') ? 'Al menos 2 caracteres' : '';
  }

  // tslint:disable-next-line:typedef
  public getAgeErrorMessage() {
    return this.frm.controls.age.hasError('required') ? 'Age is required' :
      this.frm.controls.age.hasError('minlength') ? 'Al menos un numero debe ser ingresado' : '';
  }

  public getGenderErrorMessage() {
    return this.frm.controls.gender.hasError('required') ? '' : '';
  }

}
