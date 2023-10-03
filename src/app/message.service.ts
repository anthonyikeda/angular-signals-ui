import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  constructor() { }

  getMessages(): Observable<String[]> {
    return of(['Message A', 'Message B', 'Message C']);
  }
}
