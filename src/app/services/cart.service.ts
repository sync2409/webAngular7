import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  private _CartInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public CartInfo: Observable<any[]> = this._CartInfo.asObservable();
  constructor() {
    if (this._CartInfo.value.length == 0) {
      var data = localStorage.getItem(GlobalVariable.StorageCartInfo) != null ? JSON.parse(localStorage.getItem(GlobalVariable.StorageCartInfo)) : [];
      this._CartInfo.next(data);
    }
  }
  ngOnInit() {

  }
  AddCart(ProductDetail) {
    var index = this._CartInfo.getValue().indexOf(ProductDetail);
    if (index > -1) {
      return;
    }
    this._CartInfo.next(this._CartInfo.getValue().concat([ProductDetail]));
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
  }
  UpdateCart(ProductDetail) {
    var index = this._CartInfo.getValue().indexOf(ProductDetail);
    if (index > -1) {
      this._CartInfo.getValue().splice(index, 1);
    }
    this._CartInfo.next(this._CartInfo.getValue().concat([ProductDetail]));
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
  }
  RemoveProduct(ProductDetail) {
    var index = this._CartInfo.getValue().indexOf(ProductDetail);
    if (index > -1) {
      this._CartInfo.getValue().splice(index, 1);
    }
    this._CartInfo.next(this._CartInfo.getValue());
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
  }
}
