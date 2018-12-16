import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';
import { LibsService } from './libs.service';
import { IOrderInfo } from '../DTO/orderinfo.dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {
  private _OrderInfo: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public OrderInfo: Observable<any[]> = this._OrderInfo.asObservable();
  constructor(private libs: LibsService) {

  }
  ngOnInit() {

  }
  AddOrder(): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'Order/Order_InsertUpdate';
    let dataPost = {};
    let data = this.libs.PostData(url, dataPost);
    console.log("AddOrder", data);
    return data;
  }
  UpdateOrder(data: IOrderInfo): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'Order/Order_InsertUpdate';
    let dataPost = {
      OrderID: data.OrderID,
      AccountID: data.AccountID,
      Username: data.Username,
      OrderCode: data.OrderCode,
      FullName: data.FullName,
      DeliveryAddress: data.DeliveryAddress,
      Mobile: data.Mobile,
      Description: data.Description,
      TotalAmount: data.TotalAmount,
      Status: data.Status,
      Note: data.Note,
      PaymentNote: data.PaymentNote,
      PaymentStatus: data.PaymentStatus,
      PaymentType: data.PaymentType,
      OrderDetailJSON: data.OrderDetailJSON,

    };
    console.log("UpdateOrder", dataPost);
    return this.libs.PostData(url, dataPost);
  }
  RemoveProduct(ProductDetail) {

  }
  GetListOrder() : Observable<any> {
    var url = GlobalVariable.BASE_API_URL + 'Order/FE_Orders_GetRows';
    let dataPost = {};
    return this.libs.PostData(url, dataPost);
  }
}
