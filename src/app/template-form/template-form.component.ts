import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

// interface UserData {
//   id: number;
//   fname: string;
//   lname: string;
//   gender: string;
//   email: string;
//   mobile: string;
//   address : Address
// }

// interface Address{
//   country : string ,
//   state : string ,
//   city : string ,
// }

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
  lblcity: string = 'City :';
  lblstate: string = 'State : ';
  lblcountry: string = 'Country :';
  lblSubmit: string = 'Submit';
  lblReset: string = 'Reset';
  formErr: string = '';

  userDatas: any = [
    {
      id: 1,
      fname: 'Dharmik',
      lname: 'Jikadra',
      gender: 'male',
      email: 'dharmikj.tagline@gmail.com',
      mobile: '1234567890',
      address: {
        country: 'India',
        state: 'Gujrat',
        city: 'Surat',
      },
    },
    {
      id: 2,
      fname: 'Pratik',
      lname: 'Ghoghari',
      gender: 'male',
      email: 'pratikg.tagline@gmail.com',
      mobile: '8765467890',
      address: {
        country: 'USA',
        state: 'New York',
        city: 'New',
      },
    },
  ];

  // country!: string;
  // states!: string;
  // stateSelect!: string[];
  // citySelect!: string[];
  // string: any = '';

  // populate() {
  //   this.country = (
  //     document.getElementById('country') as HTMLSelectElement
  //   ).value;

  //   if (this.country == 'India') {
  //     this.stateSelect = ['Gujrat', 'Maharashtra', 'Delhi'];
  //   } else if (this.country == 'US') {
  //     this.stateSelect = ['New York', 'Chicago'];
  //   } else {
  //     this.stateSelect = [];
  //   }

  //   for (let i = 0; i < this.stateSelect.length; i++) {
  //     this.string =
  //       this.string + '<option>' + this.stateSelect[i] + '</option>';
  //   }

  //   (document.getElementById('state') as HTMLSelectElement).innerHTML =
  //     '<select>' + this.string + '</select>';
  //   this.states = (document.getElementById('state') as HTMLSelectElement).value;

  //   if (this.states == 'Gujrat') {
  //     this.citySelect = ['Surat', 'Ahmdabad'];
  //   } else if (this.states == 'Maharashtra') {
  //     this.citySelect = ['mumbai', 'bandra'];
  //   } else {
  //     this.citySelect = [];
  //   }

  //   for (let i = 0; i < this.citySelect.length; i++) {
  //     this.string =
  //       this.string + '<option>' + this.stateSelect[i] + '</option>';
  //   }
  //   (document.getElementById('city') as HTMLSelectElement).innerHTML =
  //     '<select>' + this.string + '</select>';
  // }

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
      console.log(this.userDatas);
      this.userId = 0;
      this.templateForm.reset();
      console.log(this.userDatas);
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

  countryList: Array<any> = [
    {
      name: 'India',
      stat: ['Gujrat', 'Maharashtra', 'Kolkata', 'Banglore', 'Delhi'],
    },
    {
      name: 'Germany',
      stat: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'],
    },
    {
      name: 'Spain',
      stat: ['Barcelona', 'Madrid'],
    },
    {
      name: 'USA',
      stat: ['Downers Grove', 'New York'],
    },
  ];

  stateFinds: Array<any> = [
    { name: 'Gujrat', city: ['Surat', 'Rajkot', 'Ahmdabad'] },
    { name: 'Maharashtra', city: ['Mumbai', 'Thana'] },
    { name: 'Kolkata', city: ['KolkataCity1', 'KolkataCity2'] },
    { name: 'Banglore', city: ['Bang', 'Luru'] },
    { name: 'Delhi', city: ['New Delhi', 'Old Delhi'] },
    { name: 'Duesseldorf', city: ['Duessel', 'dorf'] },
    { name: 'Leinfelden-Echterdingen', city: ['Leinfelden', 'Echterdingen'] },
    { name: 'Eschborn', city: ['Esch', 'born'] },
    { name: 'Barcelona', city: ['Barce', 'lona'] },
    { name: 'Madrid', city: ['MadCity1', 'MadCity2'] },
    { name: 'Downers Grove', city: ['Downers', 'Grove'] },
    { name: 'New York', city: ['New', 'York'] },
  ];

  stat: any;
  changeCountry(count: any) {
    console.log(count.target.value);
    this.stat = this.countryList.find(
      (con) => con.name == count.target.value
    ).stat;
    console.log(this.stat);
  }

  cities: any;
  changeState(count: any) {
    console.log(count.target.value);
    this.cities = this.stateFinds.find(
      (con : any) => con.name == count.target.value
    ).city;
    console.log(this.cities);
  }
}
