import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/shared/api.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-artcles',
  templateUrl: './artcles.component.html',
  styleUrls: ['./artcles.component.scss']
})
export class ArtclesComponent implements OnInit {
  error;
  form;
  sucess;
  user;
  name = 'SOLA';
  job = 'CEO'
  constructor(private service: ApiService, private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.FORMS();
    this.getSingleUser(2);
console.log(this.value);
      }

    FORMS() {
      return this.fb.group({
      name: ['', Validators.required],
    job: ['', Validators.required],
      });
    }
    onSubmit() {

      this.service.newUser(this.form.value).subscribe(res => {
    this.sucess = this.form.value.name + 'added';
    setTimeout(() => {
      this.sucess =  '';
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
get value() {
  return this.form.valid;
}
onUpdate() {
  this.service.UpdateUser(this.form.value).subscribe(res => {
    this.sucess = this.form.value.name + 'Updated';
    setTimeout(() => {
      this.sucess =  '';
    }, 4000 );
     this.form.reset();
      },
    err => {

    this.error = 'Error';
    setTimeout(() => {
      this.error = '';
    }, 4000 );

    }
    );

}
onRemove(){
this.service.RemoveUser(2).subscribe(res => {
  this.sucess = 'User Remove';
  setTimeout(() => {
    this.sucess =  '';
  }, 4000 );
   this.form.reset();
    },
  err => {

  this.error = ' User Removed';
  setTimeout(() => {
    this.error = '';
  }, 4000 );

  }
  );
}
getSingleUser(id) {
this.service.getSingleUser(id).subscribe((res: any )=>{
this.user = res.data;
console.log(res);
});
}
}
