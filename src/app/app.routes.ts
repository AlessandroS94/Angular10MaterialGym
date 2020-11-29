import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// FILTER
import { AuthGuard } from './guards/auth.guard';

// LAYOUTS
import { AdminLayoutComponent } from './modules/admin-layout/admin-layout.component';

import {LoginComponent} from './modules/login/login.component';
import { HomeComponent} from './modules/home/home.component';

/*CON LA CREACIÓN DEL ARCHIVO INDEX.PAGES NOS AHORRAMOS TENER QUE HACER
UNA IMPORTACIÓN POR CADA COMPONENTE DE LAS VISTAS*/
import {
  NotFoundComponent,
} from './utils/index.pages';

// ROUTES
const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'dashboard/clients',
        loadChildren: './modules/client/client.module#ClientModule',
      },
      {
        path: 'dashboard/users',
        loadChildren: './modules/user/user.module#UserModule',
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

