import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';
import { GlobalVariable } from 'src/app/config/global';
import { CartService } from 'src/app/services/cart.service';
declare var $: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public ProductDetail;
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public PriceTem = 0;
  public ListImage = [];
  public Quantity = 0.1;
  public NumberInCart = 0;
  public cateID = 0;
  public pID: number;
  public isBuy: boolean = false;

  constructor(private route: ActivatedRoute,
    private gval: GlobalconfigService,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.gval.setIsShowSlide(false);
    this.route.params.subscribe(params => {
      //console.log(params);
      this.pID = params.id;
      this.cateID = params.cateID;
      this.GetProductDetail(this.pID);
      this.cartService.CartInfo.subscribe(data => {
        //console.log('this.NumberInCart', data);
        this.NumberInCart = data.OrderDetail.length;
        let that = this;
        let checkIsBuy = data.OrderDetail.filter(function (f) {
          return f.ProductID == that.pID;
        });
        //console.log('this.NumberInCart checkIsBuy', checkIsBuy);

        if (checkIsBuy.length > 0) {
          this.isBuy = true;
        } else {
          this.isBuy = false;
        }
      });

    });
  }
  setActiveTab(id) {
    $('.nav-tabs li').removeClass('active');
    $('.nav-tabs #' + id).addClass('active');
    $('.tab-content div').removeClass('active');
    $('.tab-content #' + id).addClass('active');
  }
  GetProductDetail(pID) {
    this.productService.GetListProducts(pID).subscribe((data: any) => {
      //console.log('GetProductDetail', data);
      if (data.ListData.length > 0) {
        this.ProductDetail = data.ListData[0];
        // this.ProductDetail.ImageUrlOther = "/Images/files/4af8__u-vai-bo-hagl-u-vai-bo.png|/Images/files/c50a__ga-ac-to.png|/Images/files/4af8__u-vai-bo-hagl-u-vai-bo.png";
        this.ListImage = this.ProductDetail.ImageUrlOther ? this.ProductDetail.ImageUrlOther.split("|") : [];
        this.PriceTem = this.Quantity * (this.ProductDetail.PricePromotion > 0 ? this.ProductDetail.PricePromotion : this.ProductDetail.Prices);
        this.gval.updateBreadCrumb([
          { Name: "Trang chủ", Link: "/" },
          { Name: this.ProductDetail.ProductName, Link: "/" },
        ]);
      }
    });
  }
  SetImageUrlView(imageUrl) {
    $("#imageView").attr("src", this.BASE_URL_MEDIA + imageUrl);
  }
  ChangeQuantity(txtQuantity) {
    //console.log('ChangeQuantity', txtQuantity.value);
    this.Quantity = txtQuantity.value;
    this.PriceTem = txtQuantity.value * (this.ProductDetail.PricePromotion > 0 ? this.ProductDetail.PricePromotion : this.ProductDetail.Prices);

    this.ProductDetail.Quantity = this.Quantity;
    this.ProductDetail.PriceTem = this.PriceTem;
    if (this.isBuy) {
      this.cartService.UpdateCart(this.ProductDetail);
    }
  }
  AddCart() {
    this.ProductDetail.Quantity = this.Quantity;
    this.ProductDetail.PriceTem = this.PriceTem;
    this.cartService.AddCart(this.ProductDetail);
    this.isBuy = true;
  }
}
