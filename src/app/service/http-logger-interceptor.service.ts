import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLoggerInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>,next:HttpHandler){

    console.log('Out going request');
    console.log(req.url);
    return next.handle(req).pipe(
      tap(event => {
        if(event.type === HttpEventType.Response)
        {
          console.log('Incoming data:');
          console.log(event.body);
        }
      })
      )
  }

}
