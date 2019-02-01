import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  { path: '', loadChildren: '../app/main/main.module#MainModule' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
  exports: [  RouterModule]
})
export class AppRoutingModule { }
