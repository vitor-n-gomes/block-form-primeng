import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Profile } from '../../../../model/profile'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();

  @Input() profileData: Profile;

  @Input() display: boolean = true;

  title: string = 'Create User';

  createUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.createUser = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      _id: ['']
    });

  }

  ngOnInit(): void {
    console.log(this.profileData);
    this.createUser.patchValue({...this.profileData});
  }

  onSubmit() {

  }

  onClose() {
    this.display = false;
    this.close.emit();
  }

}
