import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';
import { IOrderInfo } from '../DTO/orderinfo.dto';
import { OrderService } from './order.service';
import { async } from '@angular/core/testing';
import { IAccount } from '../DTO/account';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {
  private _CartInfo: BehaviorSubject<IOrderInfo> = new BehaviorSubject<IOrderInfo>(new IOrderInfo());
  public CartInfo: Observable<IOrderInfo> = this._CartInfo.asObservable();
  public accountInfo = new IAccount();
  constructor(
    private orderService: OrderService,
    private accountService: AccountService
  ) {
    this._CartInfo.next(new IOrderInfo());
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
  ClearCart() {
    this._CartInfo.next(new IOrderInfo());
    localStorage.clear();
  }
  AddCart(ProductDetail) {
    let c = this._CartInfo.value;
    let c1 = this._CartInfo.getValue();
    var index = this._CartInfo.getValue().OrderDetail.indexOf(ProductDetail);
    if (index > -1) {
      return;
    }
    if (this._CartInfo.getValue().OrderID > 0) {
      let cardOld = this._CartInfo.value;
      cardOld.OrderDetail = this._CartInfo.value.OrderDetail.concat([ProductDetail])
      this._CartInfo.next(cardOld);
      localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(cardOld));
    } else {
      this.orderService.AddOrder().subscribe((data: any) => {
        console.log("AddCart", data);
        let orderAdd = new IOrderInfo();
        if (data.c > 0) {
          orderAdd.OrderID = data.c;
          orderAdd.OrderCode = data.OrderCode;
          this.accountService.AccountInfo.subscribe(data => {
            if (data && data.AccountID > 0) {
              orderAdd.AccountID = data.AccountID;
            }
          });
        } else {
          orderAdd.OrderID = -1;
          orderAdd.OrderCode = "N/A";
        }
        orderAdd.OrderDetail = this._CartInfo.value.OrderDetail.concat([ProductDetail]);
        this._CartInfo.next(orderAdd);
        localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
      });
    }

  }

  UpdateAccountCart(_AccountID: number = 0) {
    let cardOld = this._CartInfo.value;
    cardOld.AccountID = _AccountID;
    this._CartInfo.next(cardOld);
    localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(cardOld));
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
    if (this._CartInfo.getValue().OrderDetail.length == 0) {
      this.ClearCart();
    } else {
      this._CartInfo.next(this._CartInfo.getValue());
      localStorage.setItem(GlobalVariable.StorageCartInfo, JSON.stringify(this._CartInfo.value));
    }
  }
}
