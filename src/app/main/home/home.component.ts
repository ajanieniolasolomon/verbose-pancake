import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
sideNav = [];
collapsed = true;
  constructor() { }

  ngOnInit() {

this.sideNav = [{
name: 'DashBoard',
icon: 'dashboard',
link: '',


}, {
  name: 'CRUD Operation',
  icon: 'user',
  link: '/articles'

  },
  {
    name: 'Table List',
    icon: 'list',
    link: '/table'
  }
,
{
  name: 'Typography',
  icon: 'text',
  link: '/typo'
},
{
  name: 'Icon',
  icon: 'objects',
  link: '/icon'
},
{
  name: 'Notification',
  icon: 'bell',
  link: '/note'
}
];


  }



}
