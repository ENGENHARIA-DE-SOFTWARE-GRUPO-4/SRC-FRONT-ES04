import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent {
  constructor(private location: Location){}
  goBack() {
    this.location.back()
  }
}
