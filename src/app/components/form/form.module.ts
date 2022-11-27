import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';

import { FormRoutingModule } from './form-routing.module';
import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { SharedModule } from '../../shared/shared.module';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileFormComponent } from './create-profile/profile-form/profile-form.component'

@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    InputTextareaModule,
    DialogModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateUserFormComponent, CreateProfileComponent, ProfileFormComponent]
})
export class FormModule { }
