import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(
    private location: Location,
    private router: Router
  ){}

  goBack() {
    this.location.back()
  }

  logout() {
    this.router.navigate(['login'])
  }

}
