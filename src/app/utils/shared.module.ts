import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialComponentsModule} from './material.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        MatProgressSpinnerModule,
        YouTubePlayerModule

    ],
    exports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        YouTubePlayerModule

    ]
})
export class SharedModule {
}
