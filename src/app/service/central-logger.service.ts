import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentralLoggerService {

  logToConsole(message:any)
  {
    console.log(new Date + ": " + message)
  }

  infoToConsole(message:any)
  {
    console.info(new Date + ": " + message)
  }

  debugToConsole(message:any)
  {
    console.debug(new Date + ": " + message)
  }

  errorToConsole(message:any)
  {
    console.error(new Date + ": " + message)
  }

  constructor() { }
}
