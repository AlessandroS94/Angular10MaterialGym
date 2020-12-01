import { NgModule } from '@angular/core';
import { SharedModule } from '../../utils/shared.module';
import { RouterModule } from '@angular/router';
import { DietaComponent } from './dieta.component';
// import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [], // UserFormComponent
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: DietaComponent}]),
  ]
})
export class UserModule { }
