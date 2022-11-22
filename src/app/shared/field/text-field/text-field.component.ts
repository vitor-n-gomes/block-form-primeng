import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input()
  public control!: FormControl;
  @Input()
  public label: string = '';
  @Input()
  public errorMessage: string = '';
  @Input()
  public placeholder: string = '';
  @Input()
  public class!: string;
  @Output()
  public onBlur = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.errorMessage = this.errorMessage ? this.errorMessage : 'Error Message' 
  }
  
  hasSuccess(): boolean {
    return this.control.valid && (this.control.dirty || this.control.touched)
  }
  
  hasError(): boolean {
    return !this.control.valid && (this.control.dirty || this.control.touched)
  }

}
