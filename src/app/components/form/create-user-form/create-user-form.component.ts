import { Component, OnInit } from '@angular/core';
import {   FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  providers: [ FormBuilder],
  styleUrls: ['./create-user-form.component.scss']
})
export class CreateUserFormComponent implements OnInit {

  createUser: FormGroup;

  jsonOutput: string;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  numberPattern = /^[0-9]*$/;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createUser = this.formBuilder.group({

      name: this.formBuilder.control('', [
        Validators.required, 
        Validators.minLength(5)]),

      email: this.formBuilder.control('', [
        Validators.required, Validators.email,
        Validators.pattern(this.emailPattern)]),

      emailConfirmation: this.formBuilder.control('', [
        Validators.required, Validators.email,
        Validators.pattern(this.emailPattern)]),

      address: this.formBuilder.control('', [
        Validators.required, Validators.minLength(5)]),

      number: this.formBuilder.control('', [
        Validators.required, Validators.pattern('[0-9]+')]),

      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    });


  }

  saveData(info:any) {
    console.log(info); 
  }
}
