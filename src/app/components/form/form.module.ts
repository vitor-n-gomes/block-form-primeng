import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';

import { FormRoutingModule } from './form-routing.module';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { InputComponent } from '../../shared/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateUserFormComponent, InputComponent]
})
export class FormModule { }
