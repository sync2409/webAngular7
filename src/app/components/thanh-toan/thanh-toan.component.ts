import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { IOrderInfo } from 'src/app/DTO/orderinfo.dto';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit {
  public CartData = [];
  public OrderInfo: IOrderInfo;
  public NumberInCart: number = 0;
  public TotalPriceTem: number = 0;
  public TotalShip: number = 0;
  public isCheckOtherAddress: boolean = false;
  public paymentStatus: number = 1;
  public bank_info: string = 'vcb';
  constructor(private gval: GlobalconfigService
    , private cartService: CartService
    , private _router: Router
    , private orderService: OrderService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.cartService.CartInfo.subscribe((data: any) => {
      this.OrderInfo = data;
      this.CartData = data.OrderDetail;
      this.NumberInCart = data.OrderDetail.length;
      this.SumValueTotalTemp();
    });
  }
  changedCheckOtherAddress = (evt) => {
    this.isCheckOtherAddress = !this.isCheckOtherAddress;
  }
  SumValueTotalTemp() {
    this.TotalPriceTem = 0;
    this.CartData.forEach(element => {
      this.TotalPriceTem += element.Prices * element.Quantity;
    });
    if (this.TotalPriceTem <= 0) {
      this._router.navigate(['/gio-hang']);
    }
  }
  update_payment(value) {
    this.paymentStatus = value;
  }
  update_bank_info(value) {
    this.bank_info = value;
  }
  ThanhToan(_customerInfo, _customerOtherInfo) {
    let customerInfo = _customerInfo.controls
    let customerOtherInfo = _customerOtherInfo.controls
    console.log("ThanhToan", customerInfo, customerOtherInfo);
    let dataPost = new IOrderInfo();
      dataPost.OrderID = this.OrderInfo.OrderID;
      dataPost.AccountID = 0;
      dataPost.Username = "";
      dataPost.OrderCode = this.OrderInfo.OrderCode;
      dataPost.FullName = "";
      dataPost.DeliveryAddress = customerInfo.txtAddress
      dataPost.Mobile = customerInfo.txtPhone;
      dataPost.Description = this.paymentStatus == 1 ?"Thanh toán khi nhận hàng": "Thanh toán thẻ";
      dataPost.TotalAmount = this.TotalPriceTem;
      dataPost.Status = this.paymentStatus;
      dataPost.Note = customerInfo.txtNote;
      this.orderService.UpdateOrder(dataPost);
    }
  }

