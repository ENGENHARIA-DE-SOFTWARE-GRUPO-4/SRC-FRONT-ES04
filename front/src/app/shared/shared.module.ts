import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    InputComponent,
    SelectComponent

  ]
})
export class SharedModule { }
