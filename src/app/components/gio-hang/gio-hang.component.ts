import { Component, OnInit, ViewChildren, ElementRef, Query, QueryList, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { GlobalVariable } from 'src/app/config/global';

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
  ngOnInit() {
    this.cartService.CartInfo.subscribe((data: any) => {
      this.CartData = data;
      this.NumberInCart = data.length;
    });
  }
  ngAfterViewInit() {
    this.things111.changes.subscribe(t => {
      console.log("ngAfterViewInit");
      this.SumValueTotalTemp();
    });
  }
  RemoveProduct(product) {
    this.cartService.RemoveProduct(product);
  }
  customTrackBy(i, item) {
    return i;
  }
  SumValueTotalTemp() {
    this.TotalPriceTem = 0;
    this.CartData.forEach(element => {
      var newPriceTem = $("#PriceTem" + element.ProductID).html().replace(/,/g, '');
      this.TotalPriceTem += parseInt(newPriceTem);
    });
  }
  ChangePriceTem(item, obj) {
    var productID = item.ProductID;
    var newPriceTem = obj.target.value * item.Prices;
    $("#PriceTem" + productID).html(newPriceTem);
    this.SumValueTotalTemp();

  }
}
