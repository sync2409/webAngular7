import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalconfigService {
  public isDetailMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public BreadCrumb: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  setMenuStatus(_isDetailMenu) {
    console.log("_isDetailMenu",_isDetailMenu)
    this.isDetailMenu.next(_isDetailMenu);
  }
  updateBreadCrumb(data:any) {
    this.BreadCrumb.next(data);
  }
  constructor() { }
}
