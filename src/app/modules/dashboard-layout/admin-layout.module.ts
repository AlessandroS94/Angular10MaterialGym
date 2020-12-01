import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../utils/shared.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { DashboardModule } from '../../modules/dashboard/dashboard.module';

@NgModule({
  imports: [
    RouterModule,
    SharedModule,
    DashboardModule
  ],
  declarations: [
    AdminLayoutComponent
  ],
  providers: [],
  exports: []
})
export class AdminLayoutModule {
}
