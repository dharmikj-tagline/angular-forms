import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

interface UserData {
  id: number;
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
  userId!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  lblFname: string = 'First Name :';
  lblLname: string = 'Last Name :';
  lblgender: string = 'Gender :';
  lblEmail: string = 'Email :';
  lblMobile: string = 'Mobile :';
  lblcity : string ='City :';
  lblcountry : string ='Country';
  lblSubmit: string = 'Submit';
  lblReset: string = 'Reset';
  formErr : string = '';

  userDatas: UserData[] = [
    {
      id: 1,
      fname: 'Dharmik',
      lname: 'Jikadra',
      gender: 'male',
      email: 'dharmikj.tagline@gmail.com',
      mobile: '1234567890',
    },
    {
      id: 2,
      fname: 'Pratik',
      lname: 'Ghoghari',
      gender: 'male',
      email: 'pratikg.tagline@gmail.com',
      mobile: '8765467890',
    },
  ];

  showing() {
    if (this.templateForm.invalid) {
      this.formErr = 'Please Filled the Form Correctly';
      return;
    } else {
      this.lblSubmit = 'Submit';
      console.log('this.userId :>> ', this.userId);
      if (this.userId) {
        console.log('update');
        const index: number = this.userDatas.findIndex(
          (res: any) => res.id === this.userId
        );
        this.userDatas[index] = {
          ...this.templateForm.value,
        };
      } else {
        console.log('Create');
        const data = {
          id: this.userDatas.length + 1,
          ...this.templateForm.value,
        };
        this.userDatas.push(data);
      }
      this.userId = 0;
      this.templateForm.reset();
    }
  }

  deleteRec(data: any) {
    this.userDatas.splice(data, 1);
  }

  pushData(data: any) {
    this.lblSubmit = 'Update';
    this.userId = data.id;
    // this.templateForm.setValue({
    //   fname : data.fname,
    //   lname : data.lname,
    //   gender : data.gender,
    //   email : data.email ,
    //   mobile : data.mobile ,
    // });

    this.templateForm.form.patchValue(data);
    console.log(this.templateForm);
  }

  noalphabet(evet: any): void {
    if ((evet.keyCode >= 65 && evet.keyCode <= 90) || evet.keyCode == 32) {
      evet.preventDefault();
    }
  }
}
