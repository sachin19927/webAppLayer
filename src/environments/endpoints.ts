import {environment}  from './environment';

export const ENDPOINTS={

  USER_DATA: environment.gatewayUrl+'',
  //LIBRARY_DATA: environment.gatewayUrl+'books',
  LIBRARY_DATA: 'http://localhost:8080/api/v1/'+'library',
  MOVIE_DATA: environment.gatewayUrl+'movies',
  RECEIPE_DATA: environment.gatewayUrl+'receipes'

}
