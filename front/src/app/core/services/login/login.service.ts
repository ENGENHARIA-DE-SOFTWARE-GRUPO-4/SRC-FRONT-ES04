import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginResponse } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(): Observable<HttpResponse<loginResponse>> {
    return this.httpClient.get<loginResponse>('getmail' ,
      {
        observe: 'response'
      }
    )
  }
}
