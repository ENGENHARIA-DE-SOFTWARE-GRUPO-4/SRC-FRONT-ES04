import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable()
export class AddHeaderInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('assets/')) {
      let clonedRequest = req.clone({
        url: `${API}/${req.url}`,
      });
      clonedRequest = clonedRequest.clone({
        headers: clonedRequest.headers.append(
          'Access-Control-Allow-Origin',
          '*'
        )
      })
      return next.handle(clonedRequest);
    } else return next.handle(req);
  }
}
