import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HelpersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    console.log('pase por el interceptor');
    /*
    {
      token: 'jhgdfasdgflasdgfljkasdgflajksdgflajksdgfljhasdgfjlkashdfbckmjxdhvfgcukhjsgfkusdhjfasdf'
      expiry: 1233236598549
    }
    if(token && token.expiry <= Date.now()){

    }
    */
    // if(!token){
      return next.handle(request);
    // };
    // const headers = request.clone({
    //   headers : request.headers.set('Authorization', `Bearer ${token}`)
    // });
    // return next.handle(headers);
  }
}
