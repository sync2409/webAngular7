import { Component, OnInit, ViewChildren, ElementRef, Query, QueryList, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { GlobalVariable } from 'src/app/config/global';
import { NgForm } from '../../../../node_modules/@angular/forms';

declare var $: any;

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit, AfterViewInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public CartData = [];
  public NumberInCart = 0;
  public TotalPriceTem: number = 0;

  constructor(private cartService: CartService) { }
  @ViewChildren('formProductList111') things111: QueryList<any>;
  @ViewChildren('formShopCart') _formShopCart: NgForm;
  ngOnInit() {
    this.cartService.CartInfo.subscribe((data: any) => {
      this.CartData = data;
      this.NumberInCart = data.length;
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
  }
  customTrackBy(i, item) {
    return i;
  }
  SumValueTotalTemp() {
    this.TotalPriceTem = 0;
    let objformShopCart = this._formShopCart["last"].controls;
    this.CartData.forEach(element => {
      let pidTem = element.ProductID;
      this.TotalPriceTem += this.CaculatorProductTem(pidTem);
    });
  }
  ChangePriceTem(item) {
    var pidTem = item.ProductID;
    $("#PriceTem" + pidTem).html(this.CaculatorProductTem(pidTem));
    this.SumValueTotalTemp();
  }
  CaculatorProductTem(pID): number {
    let objformShopCart = this._formShopCart["last"].controls;
    var newPriceTem = objformShopCart["hiddPrices" + pID].value * objformShopCart["txtQuantity" + pID].value;

    return newPriceTem;
  }
}
