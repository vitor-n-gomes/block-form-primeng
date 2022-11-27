import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateUserFormComponent } from './create-user-form/create-user-form.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';


const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserFormComponent
  },
  {
    path: 'create-profile',
    component: CreateProfileComponent
  }
];

@NgModule({
  imports: [   ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
