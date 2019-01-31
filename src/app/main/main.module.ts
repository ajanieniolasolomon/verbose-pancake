import { NgModule,  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ArtclesComponent } from './artcles/artcles.component';
import { ApiService } from '@app/shared/api.service';


@NgModule({
  declarations: [DashbordComponent, HomeComponent, ArtclesComponent],
  imports: [

    SharedModule ,
    MainRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ], providers: [
    ApiService
  ]
})
export class MainModule { }
