
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from './material.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        MatProgressSpinnerModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialComponentsModule
    ]
})
export class SharedModule { }
