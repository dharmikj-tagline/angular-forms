import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CountryList, StateFinds, UserData } from '../common';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {

  reactiveForm!: FormGroup;
  lblFname: string = 'First Name : ';
  lblLname: string = 'Last Name :';
  lblGender: string = 'Gender : ';
  lblCountry: string = 'Country : ';
  lblState: string = 'State : ';
  lblCity: string = 'City : ';
  lblDate : string = 'Birth Date :';
  lblEmail: string = 'Email : ';
  lblMobile: string = 'Mobile : ';
  lblSubmit: string = 'Submit';
  states!: string[];
  cities!: string[];
  userId!: number;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      gender: ['', Validators.required],
      address: this.fb.group({
        country: [''],
        state: [''],
        city: [''],
      }),
      date: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      checkbox: ['', Validators.requiredTrue],
    });
  }

  
  userDatas: any = [
    {
      id: 1,
      fname: 'Dharmik',
      lname: 'Jikadra',
      gender: 'male',
      email: 'dharmikj.tagline@gmail.com',
      mobile: '1234567890',
      date : '2003-02-25',
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
      date : '2020-01-11',
      address: {
        country: 'USA',
        state: 'New York',
        city: 'New',
      },
    },
  ];

  // reactiveForm = new FormGroup({
  //   fname: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[a-zA-Z]+$'),
  //     Validators.minLength(2),
  //   ]),
  //   lname: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[a-zA-Z]+$'),
  //     Validators.minLength(2),
  //   ]),
  //   gender: new FormControl('', [Validators.required]),
  //   // address: new FormGroup({
  //   //   country: new FormControl('' ),
  //   //   state: new FormControl('' ),
  //   //   city: new FormControl(''),
  //   // }),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  //   ]),
  //   mobile: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('^[0-9]+$'),
  //     Validators.minLength(10),
  //     Validators.maxLength(10),
  //   ]),
  // });

  
  countryList: any = [
    {
      name: 'India',
      state: ['Gujrat', 'Maharashtra', 'Kolkata', 'Banglore', 'Delhi'],
    },
    {
      name: 'Germany',
      state: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'],
    },
    {
      name: 'Spain',
      state: ['Barcelona', 'Madrid'],
    },
    {
      name: 'USA',
      state: ['Downers Grove', 'New York'],
    },
  ];

  stateFinds: any = [
    {
      name: 'Gujrat',
      city: ['Surat', 'Rajkot', 'Ahmdabad'],
    },
    {
      name: 'Maharashtra',
      city: ['Mumbai', 'Thana'],
    },
    {
      name: 'Kolkata',
      city: ['KolkataCity1', 'KolkataCity2'],
    },
    {
      name: 'Banglore',
      city: ['Bang', 'Luru'],
    },
    {
      name: 'Delhi',
      city: ['New Delhi', 'Old Delhi'],
    },
    {
      name: 'Duesseldorf',
      city: ['Duessel', 'dorf'],
    },
    {
      name: 'Leinfelden-Echterdingen',
      city: ['Leinfelden', 'Echterdingen'],
    },
    {
      name: 'Eschborn',
      city: ['Esch', 'born'],
    },
    {
      name: 'Barcelona',
      city: ['Barce', 'lona'],
    },
    {
      name: 'Madrid',
      city: ['MadCity1', 'MadCity2'],
    },
    {
      name: 'Downers Grove',
      city: ['Downers', 'Grove'],
    },
    {
      name: 'New York',
      city: ['New', 'York'],
    },
  ];

  showData(){
    if (this.reactiveForm.invalid) {
      return;
    } else {
      this.lblSubmit = 'Submit';

      if (this.userId) {
        const index: number = this.userDatas.findIndex(
          (res: UserData) => res.id === this.userId
        );
        this.userDatas[index] = {
          ...this.reactiveForm.value,
        };
        console.log('Updated Data ', this.userDatas);
      } else {
        const data = {
          id: this.userDatas.length + 1,
          ...this.reactiveForm.value,
        };

        this.userDatas.push(data);
        console.log("Created Data ",this.userDatas);
      }
      console.log(this.userDatas);
      this.userId = 0;
      this.reactiveForm.reset();
      console.log('this.reactiveForm.value :>> ', this.userDatas);
      console.log('this.userData :>> ', this.reactiveForm);
    }
  }

  get fname(){
    return this.reactiveForm.get('fname');
  }

  get lname() {
    return this.reactiveForm.get('lname');
  }

  get gender() {
    return this.reactiveForm.get('gender');
  }

  get country() {
    return this.reactiveForm.get('address.country');
  }

  get state() {
    return this.reactiveForm.get('address.state');
  }

  get city() {
    return this.reactiveForm.get('address.city');
  }

  get date() {
    return this.reactiveForm.get('date');
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get mobile() {
    return this.reactiveForm.get('mobile');
  }

  get checkbox() {
    return this.reactiveForm.get('checkbox');
  }

  changeCountry(count: any) : void {
    console.log(count.target.value);
    this.states = this.countryList.find(
      (con: CountryList) => con.name == count.target.value
    ).state;

    console.log('States data', this.states);
  }

  changeState(count: any) :void {
    console.log(count.target.value);
    this.cities = this.stateFinds.find(
      (con: StateFinds) => con.name == count.target.value
    ).city;
    console.log(this.cities);

    console.log('Citys data', this.cities);
  }

  deleteRec(i: number) : void {
    this.userDatas.splice(i, 1);
  }

  pushData(data: any) : void {
    this.lblSubmit = 'Update';
    this.userId = data.id;
    console.log('data :>> ', data);
    this.reactiveForm.patchValue(data);
  }

  get fControls() {
    return this.reactiveForm.controls;
  }

  noalphabet(evet: any): void {
    if ((evet.keyCode >= 65 && evet.keyCode <= 90) || evet.keyCode == 32) {
      evet.preventDefault();
    }
  }

  // setDefaut() {
  //   this.fname?.setValue('Dharmik');
  //   this.lname?.setValue('Jikadra');
  //   this.gender?.setValue('male');
  //   this.email?.setValue('dharmik@gmail.com');
  //   this.mobile?.setValue('8899007766');
  // }


}
