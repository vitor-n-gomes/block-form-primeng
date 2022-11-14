import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string = '';
  @Input() errorMessage: string ='';
  @Input() showTip: boolean = false;

  input: any;

  @ContentChild(NgModel) model!: NgModel ;
  @ContentChild(FormControl) control!: FormControl ;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control;
    console.log(this.model, this.control);
    if(this.input === undefined) {
      throw new Error("This component requires directive ngModel or FormControl ");
    }
  }

  hasSuccess(): boolean {
    //return this.input.valid && (this.input.dirty || this.input.touched)
    return true;
  }
  
  hasError(): boolean {
    //return !this.input.valid && (this.input.dirty || this.input.touched)  
    return false; 
  }
}

