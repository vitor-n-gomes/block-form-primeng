import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TextFieldComponent } from './field/text-field/text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TextFieldComponent]
})
export class SharedModule { }
