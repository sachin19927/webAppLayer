import {environment}  from './environment';

export const ENDPOINTS={

  USER_DATA: environment.gatewayUrl+'',
  LIBRARY_DATA: environment.gatewayUrl+'books',
  MOVIE_DATA: environment.gatewayUrl+'movies',
  RECEIPE_DATA: environment.gatewayUrl+'receipes'

}
