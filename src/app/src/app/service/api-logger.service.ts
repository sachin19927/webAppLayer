import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiLoggerService {

  apiSuccessLog(message:any)
  {
    console.log(message)
  }



  constructor() { }
}
