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
  constructor(private service: ApiService, private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.FORMS();

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


}
