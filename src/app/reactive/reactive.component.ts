import { ChangeDetectorRef, Component, EventEmitter, OnChanges, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CityList, CountryList, StateFinds, StateList, UserData } from '../common';

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
  lblDate: string = 'Birth Date :';
  lblHobbies: string = 'Hobbies : ';
  hobbyPlay: string = 'Playing';
  hobbyRead: string = 'Reading';
  hobbyMovie: string = 'Watchig Movies';
  hobbys: string[] = ['Playing', 'Reading', 'Watchig Movies'];
  lblEmail: string = 'Email : ';
  lblMobile: string = 'Mobile : ';
  lblSubmit: string = 'Submit';
  formErr: string = '';
  notHobbies: string = 'Not Applicable';
  // states!: string[];
  // cities!: string[];
  states!: any;
  cities!: any;
  userId!: number;

  constructor(private fb: FormBuilder) {}

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
      hobbies: this.fb.array([]),
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
      date: '2003-02-25',
      hobbies: ['Playing', 'Watchig Movies'],
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
      date: '2020-01-11',
      hobbies: ['Playing', 'Reading'],
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

  // countryList: any = [
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

  // stateFinds: any = [
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

  countryList: any = [
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Germany' },
  ];

  stateList: any = [
    { id: 1, name: 'Gujarat', country: 1 },
    { id: 2, name: 'Maharastra', country: 1 },
    { id: 3, name: 'Downers Grove', country: 2 },
    { id: 4, name: 'New York', country: 2 },
    { id: 5, name: 'Duesseldorf', country: 3 },
    { id: 6, name: 'Estanguis', country: 3 },
  ];

  cityList: any = [
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

  showData(): void {
    const address = this.reactiveForm.value.address;
        const currentCountry = this.countryList.find(
          (country: CountryList) => country.id == address.country
        ).name;
        const currentState = this.stateList.find(
          (state: StateList) => state.id == address.state
        ).name;
        const currentCity = this.cityList.find(
          (cit: CityList) => cit.id == address.city
        ).name;

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
          address: {
            country: currentCountry,
            state: currentState,
            city: currentCity,
          },
        };
        console.log('Updated Data ', this.userDatas);
      } else {
        
        // console.log('selectCountry :>> ', currentCountry);
        // console.log('selectState :>> ', currentState);
        // console.log('selectCity :>> ', currentCity);

        const data = {
          id: this.userDatas.length + 1,
          ...this.reactiveForm.value,
          address: {
            country: currentCountry,
            state: currentState,
            city: currentCity,
          },
        };

        console.log('data :>> ', data);

        console.log('this.userDatas :>> ', this.userDatas);
        this.userDatas.push(data);
        console.log('this.userDatas ', this.userDatas);
      }
      console.log(this.userDatas);
      this.userId = 0;
      this.reactiveForm.reset();
      console.log('this.reactiveForm.value :>> ', this.userDatas);
    }
  }

  deleteRec(i: number): void {
    this.userDatas.splice(i, 1);
    console.log(this.userDatas);
  }

  pushData(data: any): void {
    this.lblSubmit = 'Update';
    console.log(data.id);
    this.userId = data.id;
    console.log('data :>> ', data);
    this.reactiveForm.patchValue(data);
  }

  noAlphabet(evet: any): void {
    if ((evet.keyCode >= 65 && evet.keyCode <= 90) || evet.keyCode == 32) {
      evet.preventDefault();
    }
  }

  get formControls() {
    return this.reactiveForm.controls;
  }

  get fname() {
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

  // get hobbies() {
  //   return this.reactiveForm.get('hobbies') as FormArray;
  // }

  get email() {
    return this.reactiveForm.get('email');
  }

  get mobile() {
    return this.reactiveForm.get('mobile');
  }

  get checkbox() {
    return this.reactiveForm.get('checkbox');
  }

  // changeCountry(count : any) : void {
  //   console.log(count.target.value);
  //   this.states = this.countryList.find(
  //     (con: CountryList) => con.name == count.target.value
  //   ).state;

  //   console.log('States data', this.states);
  // }

  // changeState(count: any) :void {
  //   console.log(count.target.value);
  //   this.cities = this.stateFinds.find(
  //     (con: StateFinds) => con.name == count.target.value
  //   ).city;

  //   console.log('Citys data', this.cities);
  // }

  changeCountry(count: any) {
    console.log('count.target', count.target.value);
    console.log(this.state);
    this.states = this.stateList.filter(
      (con: StateList) => con.country == count.target.value
    );

    console.log('States data', this.states);
  }

  changeState(count: any) {
    this.cities = this.cityList.filter(
      (con: CityList) => con.state == count.target.value
    );
    console.log(this.cities);
  }

  hobbySelect(select: any) {
    console.log('hoobies event', select);
    let hobbyArr = this.reactiveForm.get('hobbies') as FormArray;

    if (select.target.checked) {
      hobbyArr.push(new FormControl(select.target.value));
      console.log('Hobbies Value : ', hobbyArr.value);
      console.log('Hobbies length : ', hobbyArr.length);
    } else {
      let i = 0;
      hobbyArr.controls.forEach((hobby: any) => {
        console.log('hobby object value', hobby.value);
        if (hobby.value == select.target.value) {
          hobbyArr.removeAt(i);
        }
        i++;
      });
      if(hobbyArr.length == 0){
          hobbyArr.push(new FormControl(this.notHobbies));
        }
    }
  }
}

// if(select.target.checked == false){
//   hobbyArr.push(new FormControl(this.notHobbies));
// }

// if(hobbyArr.length == 0){
//   hobbyArr.push(new FormControl(this.notHobbies));
// }

// setDefaut() {
//   this.fname?.setValue('Dharmik');
//   this.lname?.setValue('Jikadra');
//   this.gender?.setValue('male');
//   this.email?.setValue('dharmik@gmail.com');
//   this.mobile?.setValue('8899007766');
//   this.country?.setValue('India');
// }
