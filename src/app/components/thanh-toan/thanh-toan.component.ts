import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { IOrderInfo } from 'src/app/DTO/orderinfo.dto';
import { OrderService } from 'src/app/services/order.service';
import { LibsService } from 'src/app/services/libs.service';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/DTO/account';

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
  public LuuYThanhToan;
  public accountInfo = new IAccount();
  constructor(private gval: GlobalconfigService
    , private cartService: CartService
    , private _router: Router
    , private orderService: OrderService
    , private libService: LibsService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.gval.setIsShowSlide(false);
    this.gval.updateBreadCrumb([
      { Name: "Trang chủ", Link: "/" },
      { Name: "Thanh toán", Link: "/" },
    ]);
    this.cartService.CartInfo.subscribe((data: any) => {
      this.OrderInfo = data;
      this.CartData = data.OrderDetail;
      this.NumberInCart = data.OrderDetail.length;
      this.SumValueTotalTemp();
    });
    this.libService.GetListConfig().subscribe((data: any) => {
      this.LuuYThanhToan = data.ListData.find(function (f) {
        return f.ID == 2;
      });
    });
    this.GetAccountInfo();
  }
  GetAccountInfo() {
    this.accountService.AccountInfo.subscribe(data => {
      this.accountInfo = data
    });
  }
  changedCheckOtherAddress = (evt) => {
    this.isCheckOtherAddress = !this.isCheckOtherAddress;
  }
  SumValueTotalTemp() {
    this.TotalPriceTem = 0;
    this.CartData.forEach(element => {
      this.TotalPriceTem += (element.PricePromotion > 0 ? element.PricePromotion : element.Prices) * element.Quantity;
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
  ThanhToan(_customerInfo) {
    let customerInfo = _customerInfo.controls
    //let customerOtherInfo = _customerOtherInfo.controls
    //console.log("ThanhToan", customerInfo);
    let dataPost = new IOrderInfo();
    dataPost.OrderID = this.OrderInfo.OrderID;
    dataPost.AccountID = this.OrderInfo.AccountID;
    dataPost.Username = this.OrderInfo.Username;
    dataPost.OrderCode = this.OrderInfo.OrderCode;
    dataPost.FullName = customerInfo.txtFullName.value;
    dataPost.DeliveryAddress = customerInfo.txtAddress.value;
    dataPost.Mobile = customerInfo.txtPhone.value;
    dataPost.Description = "Mô tả";
    dataPost.TotalAmount = this.TotalPriceTem;
    dataPost.Status = 1;//0: tạo đơn hàng nhưng chưa thanh toán, 1: đã thanh toán nhưng chưa giao hàng, 2 là đã giao hàng
    dataPost.Note = customerInfo.txtNote.value;
    dataPost.PaymentNote = this.paymentStatus == 1 ? "Thanh toán khi nhận hàng" : "Thanh toán thẻ";
    dataPost.PaymentStatus = 0;//0 là đơn hàng mới tạo,
    dataPost.PaymentType = this.paymentStatus;
    var arrOrderDetail = [];
    this.OrderInfo.OrderDetail.forEach(element => {
      arrOrderDetail.push({
        OrderID: this.OrderInfo.OrderID,
        ProductID: element.ProductID,
        ProductCode: element.ProductCode,
        ProductName: element.ProductName,
        Unit: element.Unit,
        Quantity: element.Quantity,
        TotalAmount: element.PriceTem,
        OtherRequest: ""
      })
    });
    dataPost.OrderDetailJSON = JSON.stringify(arrOrderDetail)
    this.orderService.UpdateOrder(dataPost).subscribe((data: any) => {
      //console.log("UpdateOrder", data);
      if (data.c > 0) {
        this.cartService.ClearCart();
      }
    });;
  }
}

