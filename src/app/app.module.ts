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
