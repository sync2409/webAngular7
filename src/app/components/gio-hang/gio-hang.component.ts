import { Component, OnInit, ViewChildren,ViewChild, ElementRef, Query, QueryList, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { GlobalVariable } from 'src/app/config/global';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { LibsService } from '../../services/libs.service';
import { IOrderInfo } from 'src/app/DTO/orderinfo.dto';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit, AfterViewInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public CartData = [];
  public OrderInfo: IOrderInfo;
  public NumberInCart = 0;
  public TotalPriceTem: number = 0;
  public OrderCode = "Chưa thanh toán";
  constructor(
    private cartService: CartService
  , private libService: LibsService
  , private _router: Router) { }
  @ViewChildren('formProductList111', { read: ElementRef }) things111: QueryList<ElementRef>;
  @ViewChildren('formShopCart') _formShopCart: NgForm;
  ngOnInit() {
    this.cartService.CartInfo.subscribe((data: any) => {
      this.OrderInfo = data;
      this.CartData = data.OrderDetail;
      this.NumberInCart = data.OrderDetail.length;
    });
  }
  ngAfterViewInit() {
    this.things111.changes.subscribe(t => {
      console.log("ngAfterViewInit");

    });
   setTimeout(() => {
    this.SumValueTotalTemp();
   }, 1000);
  }
  RemoveProduct(product) {
    this.cartService.RemoveProduct(product);
    this.SumValueTotalTemp();
  }
  customTrackBy(i, item) {
    return i;
  }
  SumValueTotalTemp() {
    this.TotalPriceTem = 0;
    this.CartData.forEach(element => {
      let pidTem = element.ProductID;
      this.TotalPriceTem += this.CaculatorProductTem(pidTem);
    });
  }
  ChangePriceTem(item,event) {
    var pidTem = item.ProductID;
    let priceTem = this.CaculatorProductTem(pidTem);
    item.PriceTem = priceTem;
    item.Quantity = event.target.value;
    this.cartService.UpdateCart(item);
    //$("#PriceTem" + pidTem).html(this.libService.FormatMoney(priceTem));
    this.SumValueTotalTemp();
  }
  CaculatorProductTem(pID): number {
    let objformShopCart = this._formShopCart["last"].controls;
    var newPriceTem = objformShopCart["hiddPrices" + pID].value * objformShopCart["txtQuantity" + pID].value;
    return newPriceTem;
  }
  ThanhToan(){
    this.cartService.UpdateTotalPricesTemp(this.TotalPriceTem);
    this._router.navigate(['/don-hang/thanh-toan']);
  }
}
