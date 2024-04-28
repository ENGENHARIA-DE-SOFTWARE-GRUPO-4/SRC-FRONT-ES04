import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private router: Router){}

  login() {
    this.loginService.login()
    .subscribe(
      (e) => {
        window.location.href = e.body!.linkRedirect
      })
  }

}
