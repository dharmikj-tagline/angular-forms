import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData : any;
   getData(templateForm : any ){
    console.log('templateForm :>> ', templateForm);
    this.userData=templateForm;
   }

   lblFname : string ='First Name :';
   lblLname : string ='Last Name :';
   lblgender : string='Gender :';
   lblEmail : string ='Email :';
   lblPassword : string ='Password :';
   lblSubmit : string ='Submit';
   lblReset : string = 'Reset';

}
