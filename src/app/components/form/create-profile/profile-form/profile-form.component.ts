import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Output() close : EventEmitter<any> = new EventEmitter();

  @Input() profileData: any;

  @Input() display: boolean = true;
  
  title: string = 'Create User';

  createUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.createUser = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      zip: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });

  }

  ngOnInit(): void {
  }

  onSubmit(){
   
  }

  onClose(){
    this.display = false; 
    this.close.emit();
  }

}
