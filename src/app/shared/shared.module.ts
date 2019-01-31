import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,

    FormsModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
