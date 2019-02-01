import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/shared/api.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  user;
  loading = true;
  error;
  basic = false;
  form;
 
  list;
  sucess;
  constructor(private service: ApiService) { }

  ngOnInit() {

this.userInfo();

  }
  userInfo() {
    this.service.User.subscribe(res => {
      this.loading = false;
    this.user = res;
    }, err => {
  this.error = err;
    });
  }

}
