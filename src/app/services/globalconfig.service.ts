import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalconfigService {
  public isDetailMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setMenuStatus(_isDetailMenu) {
    console.log("_isDetailMenu",_isDetailMenu)
    this.isDetailMenu.next(_isDetailMenu);
  }
  constructor() { }
}
