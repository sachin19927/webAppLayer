import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedIn = false;

  isAuthenticated(){
    const promise = new Promise<boolean>(
      (resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.loggedIn);
      } ,2000 );
    });
    return promise;
  }

  login(){
    this.loggedIn=true;
  }

  logOut(){
    this.loggedIn=false;
  }
}
