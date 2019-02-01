import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from '@app/main/table/table.component';
import { ArtclesComponent } from './artcles/artcles.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './icon/icon.component';
import { TypoComponent } from './typo/typo.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashbordComponent },
      { path: 'articles', component: ArtclesComponent },
      { path: 'table', component: TableComponent},
      { path: 'typo', component: TypoComponent},
      { path: 'icon', component: IconComponent},
      { path: 'note', component: NotificationComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
