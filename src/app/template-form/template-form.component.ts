import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface UserData{
  fname : string ,
  lname : string ,
  gender : string ,
  email : string ,
  mobile : string ,
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})


export class TemplateFormComponent implements OnInit {

  @ViewChild('templateForm')
  templateForm!: NgForm;
  constructor() {}

  ngOnInit(): void {}

  userData: any;
  getData(templateForm: any) {
    this.userData = templateForm;
  }

  lblFname: string = 'First Name :';
  lblLname: string = 'Last Name :';
  lblgender: string = 'Gender :';
  lblEmail: string = 'Email :';
  lblMobile: string = 'Mobile :';
  lblSubmit: string = 'Submit';
  lblReset: string = 'Reset';

  userDatas:UserData[]=[
    {
      fname : 'Dharmik',
      lname : 'Jikadra',
      gender : 'male',
      email : 'dharmikj.tagline@gmail.com',
      mobile : '1234567890'
    },
    {
      fname : 'Pratik',
      lname : 'Ghoghari',
      gender : 'male',
      email : 'pratikg.tagline@gmail.com',
      mobile : '8765467890'
    }
  ]

  // showing(){
  //   console.log('userData :>> ', this.userData);
  //   // this.userDatas.push({
  //   //   fname : this.userData.fname ,
  //   //   lname : this.userData.lname ,
  //   //   gender : this.userData.gender ,
  //   //   email : this.userData.email ,
  //   //   mobile : this.userData.mobile ,
  //   // });
  //   this.userDatas.push(this.userData);
  //   console.log('this.userDatas :>> ', this.userDatas);
  // }

  showing(templateForm:NgForm){
    console.log('userData :>> ', this.templateForm.value);
    this.userDatas.push(this.templateForm.value);
    console.log('this.templateForm.value.email :>> ', this.templateForm.value.email);
  }

  deleteRec(templateForm:any){
    for(let i=0;i<=this.userDatas.length;i++){
      if(templateForm.email==this.userDatas.email){

      }
    }
  }
}
