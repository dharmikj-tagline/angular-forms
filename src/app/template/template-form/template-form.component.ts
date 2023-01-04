import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface UserData {
  fname: string;
  lname: string;
  gender: string;
  email: string;
  mobile: string;
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('templateForm')
  templateForm!: NgForm | any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  lblFname: string = 'First Name :';
  lblLname: string = 'Last Name :';
  lblgender: string = 'Gender :';
  lblEmail: string = 'Email :';
  lblMobile: string = 'Mobile :';
  lblSubmit: string = 'Submit';
  lblReset: string = 'Reset';

  userDatas: UserData[] = [
    {
      fname: 'Dharmik',
      lname: 'Jikadra',
      gender: 'male',
      email: 'dharmikj.tagline@gmail.com',
      mobile: '1234567890',
    },
    {
      fname: 'Pratik',
      lname: 'Ghoghari',
      gender: 'male',
      email: 'pratikg.tagline@gmail.com',
      mobile: '8765467890',
    },
  ];

  showing(templateForm: NgForm) {
    console.log('userData :>> ', this.templateForm.value);
    if(this.userDatas==this.templateForm)

    this.userDatas.push(this.templateForm.value);
    this.templateForm.reset();
  }

  deleteRec(data: any) {
    this.userDatas.splice(data, 1);
  }

  pushData(data: any) {
    // this.templateForm.setValue({
    //   fname : data.fname,
    //   lname : data.lname,
    //   gender : data.gender,
    //   email : data.email ,
    //   mobile : data.mobile ,
    // });
    this.templateForm.form.patchValue(data);
    // this.userDatas.splice(data, 1);
    console.log(this.templateForm);
    (document.getElementById('submit') as HTMLInputElement).innerHTML =
      'UPDATE';
    (document.getElementById('reset') as HTMLInputElement).style.display =
      'none';
  }

  noalphabet(evet: any): void {
    if ((evet.keyCode >= 65 && evet.keyCode <= 90) || evet.keyCode == 32) {
      evet.preventDefault();
    }
  }
}
