import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalconfigService {
  public isDetailMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isShowSlide: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public BreadCrumb: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  setMenuStatus(_isDetailMenu) {
    this.isDetailMenu.next(_isDetailMenu);
  }
  setIsShowSlide(isShowSlide) {
    this.isShowSlide.next(isShowSlide);
  }
  updateBreadCrumb(data:any) {
    this.BreadCrumb.next(data);
  }
  constructor() { }
}
