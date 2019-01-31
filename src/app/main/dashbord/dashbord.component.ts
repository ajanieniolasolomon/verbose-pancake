import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  sucess;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';
  public radarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
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
  // this.form.reset();
  this.basic = false;
  this.service.newUser(this.form.value).subscribe(res => {
this.sucess = this.form.value.name + 'added';
setTimeout(() => {
  this.sucess =  ''
}, 4000 );
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
