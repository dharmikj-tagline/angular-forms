import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  City,
  Country,
  CountryList,
  State,
  StateFinds,
  UserData,
} from '../common';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @ViewChild('templateForm')
  templateForm!: NgForm | any;
  userId!: number;

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

  states: any = [];
  cities!: any;

  // countryList: CountryList[]= [
  //   {
  //     name: 'India',
  //     state: ['Gujrat', 'Maharashtra', 'Kolkata', 'Banglore', 'Delhi'],
  //   },
  //   {
  //     name: 'Germany',
  //     state: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'],
  //   },
  //   {
  //     name: 'Spain',
  //     state: ['Barcelona', 'Madrid'],
  //   },
  //   {
  //     name: 'USA',
  //     state: ['Downers Grove', 'New York'],
  //   },
  // ];

  // stateFinds: StateFinds[] = [
  //   {
  //     name: 'Gujrat',
  //     city: ['Surat', 'Rajkot', 'Ahmdabad'],
  //   },
  //   {
  //     name: 'Maharashtra',
  //     city: ['Mumbai', 'Thana'],
  //   },
  //   {
  //     name: 'Kolkata',
  //     city: ['KolkataCity1', 'KolkataCity2'],
  //   },
  //   {
  //     name: 'Banglore',
  //     city: ['Bang', 'Luru'],
  //   },
  //   {
  //     name: 'Delhi',
  //     city: ['New Delhi', 'Old Delhi'],
  //   },
  //   {
  //     name: 'Duesseldorf',
  //     city: ['Duessel', 'dorf'],
  //   },
  //   {
  //     name: 'Leinfelden-Echterdingen',
  //     city: ['Leinfelden', 'Echterdingen'],
  //   },
  //   {
  //     name: 'Eschborn',
  //     city: ['Esch', 'born'],
  //   },
  //   {
  //     name: 'Barcelona',
  //     city: ['Barce', 'lona'],
  //   },
  //   {
  //     name: 'Madrid',
  //     city: ['MadCity1', 'MadCity2'],
  //   },
  //   {
  //     name: 'Downers Grove',
  //     city: ['Downers', 'Grove'],
  //   },
  //   {
  //     name: 'New York',
  //     city: ['New', 'York'],
  //   },
  // ];

  userDatas: UserData[] = [
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

  countryy: Country[] = [
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Germany' },
  ];

  state: State[] = [
    { id: 1, name: 'Gujarat', country: 1 },
    { id: 2, name: 'Maharastra', country: 1 },
    { id: 3, name: 'Downers Grove', country: 2 },
    { id: 4, name: 'New York', country: 2 },
    { id: 5, name: 'Duesseldorf', country: 3 },
    { id: 6, name: 'Estanguis', country: 3 },
  ];

  city: City[] = [
    { id: 1, name: 'Ahmedabad', state: 1 },
    { id: 2, name: 'Rajkot', state: 1 },
    { id: 3, name: 'Gandhinagar', state: 1 },
    { id: 4, name: 'Mumbai', state: 2 },
    { id: 5, name: 'Pune', state: 2 },
    { id: 6, name: 'Downers', state: 3 },
    { id: 7, name: 'Grove', state: 3 },
    { id: 8, name: 'New', state: 4 },
    { id: 9, name: 'York', state: 4 },
    { id: 10, name: 'Duessel', state: 5 },
    { id: 11, name: 'dorf', state: 5 },
    { id: 12, name: 'Estan', state: 6 },
    { id: 13, name: 'guis', state: 6 },
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
      console.log(this.userDatas);
      this.userId = 0;
      this.templateForm.reset();
      console.log(this.userDatas);
      console.log(this.templateForm);
    }
  }

  deleteRec(data: any) {
    this.userDatas.splice(data, 1);
  }

  pushData(data: UserData) {
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
    console.log('data :>> ', data);
  }

  noalphabet(evet: any): void {
    if ((evet.keyCode >= 65 && evet.keyCode <= 90) || evet.keyCode == 32) {
      evet.preventDefault();
    }
  }

  changeCountry(count: any) {
    // console.log(count.target.value);
    // this.state = this.countryList.find(
    //   (con) => con.name == count.target.value
    // ).stat;
    console.log(this.state);
    this.states = this.state.filter(
      (con: any) => con.country == count.target.value
    );
    // this.state.find((con:any)=>{
    //   if(con.country == count.target.value){
    //     this.states=con.name;
    //   }
    // })
    console.log('States data', this.states);
  }

  changeState(count: any) {
    // console.log(count.target.value);
    // this.cities = this.stateFinds.find(
    //   (con) => con.name == count.target.value
    // ).city;
    // console.log(this.cities);
    this.cities = this.city.filter(
      (con: any) => con.state == count.target.value
    );
    console.log(this.cities);
  }
}
