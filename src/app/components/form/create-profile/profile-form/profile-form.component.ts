import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ProfileService } from 'src/app/service/profile.service';
import { Profile } from '../../../../model/profile'

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();

  @Input() display: boolean = true;

  title: string = 'Create Profile';
  isEdit: boolean = false; 

  createUser: FormGroup;

  subscription!: Subscription;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {

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
    
    this.subscription = this.profileService.profile.subscribe((response) => {
      if(response){
        
        this.createUser.patchValue({ ...response })

        this.title = 'Edit Profile - ' + response.firstName + ' ' + response.lastName;  
        this.isEdit = true; 

      }
    });

  }

  onSubmit() {

  }

  onClose() {

    this.reset();
    this.display = false;
    this.close.emit();

  }

  reset(){

    this.title = 'Create Profile'; 
    this.isEdit = false; 
    this.createUser.reset();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
