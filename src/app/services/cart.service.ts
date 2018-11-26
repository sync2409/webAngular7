import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';
import { IOrderInfo } from '../DTO/orderinfo.dto';
import { OrderService } from './order.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  private _CartInfo: BehaviorSubject<IOrderInfo> = new BehaviorSubject<IOrderInfo>(new IOrderInfo());
  public CartInfo: Observable<IOrderInfo> = this._CartInfo.asObservable();
  constructor(private orderService: OrderService) {
    let c = this._CartInfo.value;
    if (this._CartInfo.value && this._CartInfo.value.OrderDetail.length == 0) {
      var data = localStorage.getItem(GlobalVariable.StorageCartInfo) != null
        ? JSON.parse(localStorage.getItem(GlobalVariable.StorageCartInfo))
        : new IOrderInfo();
      this._CartInfo.next(data);
    }
  }
  ngOnInit() {

  }
  AddCart(ProductDetail) {
    let c = this._CartInfo.value;
    let c1 = this._CartInfo.getValue();
    var index = this._CartInfo.getValue().OrderDetail.indexOf(ProductDetail);
    if (index > -1) {
      return;
    }
    this.orderService.AddOrder().subscribe((data: any) => {
      console.log("AddCart", data);
      let orderAdd = new IOrderInfo();
      orderAdd.OrderID = 1;
      orderAdd.OrderCode = "A001";
      orderAdd.OrderDetail = this._CartInfo.value.OrderDetail.concat([ProductDetail]);
      this._CartInfo.next(orderAdd);
      localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
    });
  }
  UpdateCart(ProductDetail) {
    var index = this._CartInfo.getValue().OrderDetail.indexOf(ProductDetail);
    if (index > -1) {
      this._CartInfo.getValue().OrderDetail.splice(index, 1);
    }
    let cardOld = this._CartInfo.value;
    cardOld.OrderDetail = this._CartInfo.value.OrderDetail.concat([ProductDetail])
    this._CartInfo.next(cardOld);
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(cardOld));
  }
  UpdateTotalPricesTemp(value) {
    this._CartInfo.getValue().TotalPricesTemp = value;
    this._CartInfo.next(this._CartInfo.getValue());
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
  }
  RemoveProduct(ProductDetail) {
    var index = this._CartInfo.getValue().OrderDetail.indexOf(ProductDetail);
    if (index > -1) {
      this._CartInfo.getValue().OrderDetail.splice(index, 1);
    }
    this._CartInfo.next(this._CartInfo.getValue());
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
  }
}
