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
icon: 'home',
link: '',


}, {
  name: 'Articles',
  icon: 'book',
  link: '/articles'

  }];


  }



}
