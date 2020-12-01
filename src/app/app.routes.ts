import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// FILTER
import {AuthGuard} from './guards/auth.guard';

// LAYOUTS FOR DASHBOARD
import {AdminLayoutComponent} from './modules/dashboard-layout/admin-layout.component';

// COMPONENT
import {RegistrationComponent} from './modules/registration/registration.component';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from './modules/home/home.component';
import {DietaComponent} from './modules/dieta/dieta.component';
import {EsercizioComponent} from './modules/esercizio/esercizio.component';
import {CreaEsercizioComponent} from './modules/crea-esercizio/crea-esercizio.component';
import {DieteComponent} from './modules/diete/diete.component';
import {AlimentiComponent} from './modules/alimenti/alimenti.component';
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
                path: '',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'dashboard/users',
                loadChildren: './modules/user/user.module#UserModule',
            },
            {
                path: 'dashboard/dieta',
                component: DietaComponent,
            },
            {
                path: 'dashboard/esercizio',
                component: EsercizioComponent,
            },
            {
                path: 'dashboard/creaEsercizio',
                component: CreaEsercizioComponent,
            },
            {
                path: 'dashboard/diete',
                component: DieteComponent,
            },
            {
                path: 'dashboard/alimenti',
                component: AlimentiComponent,
            }

        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegistrationComponent},
    {path: '', component: HomeComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

