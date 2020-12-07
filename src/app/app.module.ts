import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {SharedModule} from './utils/shared.module';

import {AppRoutingModule} from './app.routes';
import {AuthGuard} from './guards/auth.guard';

import {AppComponent} from './components/app/app.component';
import {TablesComponent} from './components/tables/tables.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {NotFoundComponent} from './modules/not-found/not-found.component';
import {ConfirmComponent} from './components/confirm/confirm.component';
import {SnackbarComponent} from './components/snackbar/snackbar.component';

import {AuthService} from './services/auth.service';


import {AdminLayoutModule} from './modules/dashboard-layout/admin-layout.module';
import {HomeComponent} from './modules/home/home.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { LoginComponent } from './modules/login/login.component';
import { RegistrationComponent } from './modules/registration/registration.component';
import { DietaComponent } from './modules/dieta/dieta.component';
import { EserciziComponent } from './modules/esercizi/esercizi.component';
import { EsercizioComponent } from './modules/esercizio/esercizio.component';
import { DieteComponent } from './modules/diete/diete.component';
import { AlimentiComponent } from './modules/alimenti/alimenti.component';
import { CreaEsercizioComponent } from './modules/crea-esercizio/crea-esercizio.component';
import { CreaSchedaComponent } from './modules/crea-scheda/crea-scheda.component';
import { SchedeComponent } from './modules/schede/schede.component';
import { SchedaUserComponent } from './modules/scheda-user/scheda-user.component';
import { SafePipe } from './pipe/safe.pipe';
import { CreaAlimentiComponent } from './modules/crea-alimenti/crea-alimenti.component';
import { CreaDietaComponent } from './modules/crea-dieta/crea-dieta.component';


@NgModule({
    declarations: [
        AppComponent,
        TablesComponent,
        ContactUsComponent,
        NotFoundComponent,
        ConfirmComponent,
        SnackbarComponent,
        HomeComponent,
        LoginComponent,
        RegistrationComponent,
        DietaComponent,
        EserciziComponent,
        EsercizioComponent,
        DieteComponent,
        AlimentiComponent,
        CreaEsercizioComponent,
        CreaSchedaComponent,
        SchedeComponent,
        SchedaUserComponent,
        SafePipe,
        CreaAlimentiComponent,
        CreaDietaComponent,
    ],
    imports: [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        AdminLayoutModule,
        MatCarouselModule,
    ],
    providers: [
        AuthGuard,
        AuthService,
    ],
    entryComponents: [
        ConfirmComponent,
        SnackbarComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
