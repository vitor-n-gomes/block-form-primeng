import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateUserFormComponent } from './create-user-form/create-user-form.component';


const routes: Routes = [
  {
    path: 'create-user',
    component: CreateUserFormComponent
  }
];

@NgModule({
  imports: [   ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
