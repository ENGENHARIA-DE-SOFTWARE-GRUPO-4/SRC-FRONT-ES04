import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minhas-infos',
  templateUrl: './minhas-infos.component.html',
  styleUrls: ['./minhas-infos.component.scss']
})
export class MinhasInfosComponent {

  constructor(private router: Router, private location: Location){}

  goToDisciplinas() {
    this.router.navigate(['disciplinas'])
  }
  goToHoras() {
    this.router.navigate(['horas'])
  }
  goBack() {
    this.location.back()
  }
}
