import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  user;
  loading = true;
  error;
  basic = false;
  form;
  chart = [];
  constructor(private service: ApiService, private fb: FormBuilder){}

  ngOnInit() {
this.form = this.FORMS();

this.userInfo();

  }
  open() {
    this.basic = true;
  }
FORMS() {
  return this.fb.group({
  name: ['', Validators.required],
job: ['', Validators.required],
  });
}
onSubmit() {
  //this.form.reset();
  this.basic = false;
  this.service.newUser(this.form.value).subscribe(res => {

this.form.reset();
  },
err => {


this.error = err;
setTimeout(() => {
  this.error = '';
}, 4000 );

}
);

}

userInfo() {
  this.service.User.subscribe(res => {
    this.loading = false;
  this.user = res.data;
  }, err => {
this.error = err;
  });
}
}
