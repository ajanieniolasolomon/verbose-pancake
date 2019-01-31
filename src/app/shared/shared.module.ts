import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import {  NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
