import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lblFname : string = 'First Name : ';
  lblLname : string = 'Last Name :';
  lblEmail : string = 'Email : ';
  lblPassword: string = 'Password : ';
  lblSubmit : string = 'Submit';
  userData : any;

  reactiveForm = new FormGroup({
    fname : new FormControl(''),
    lname : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  })

  showData(){
    this.userData=this.reactiveForm.value;
  }


}
