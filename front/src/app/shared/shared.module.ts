import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    SelectComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    InputComponent,
    SelectComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
