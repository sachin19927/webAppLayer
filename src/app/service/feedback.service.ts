import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  roleSelected = new EventEmitter<string>();

  constructor() { }



}
