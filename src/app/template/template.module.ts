import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';


@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ],
  exports :[
    TemplateFormComponent
  ]
})
export class TemplateModule { }
