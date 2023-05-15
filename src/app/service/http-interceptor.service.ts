import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
export class HttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>,next:HttpHandler){

   console.log('Before Adding Bearer Token');
   console.log(req.headers);

   const modifiedReq= req.clone({
      headers: req.headers.append('Authorization','Bearer 9035997204')
    })

    console.log('Before Adding Bearer Token');
    console.log(modifiedReq.headers);

    return next.handle(modifiedReq)
  }

}
