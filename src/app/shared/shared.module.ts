import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import {QuicklinkModule} from 'ngx-quicklink';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    ChartsModule,
    QuicklinkModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    QuicklinkModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
