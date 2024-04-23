import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.scss']
})
export class HorasComponent {

  constructor(
    private router: Router
  ) {}

  goToMyHours() {
    this.router.navigate(['minhasHoras'])
  }

}
