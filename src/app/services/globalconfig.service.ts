import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalconfigService {
  public isDetailMenu:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setMenuStatus(isLoggedIn){
   this.isDetailMenu.next(isLoggedIn);
  }
  constructor() { }
}
