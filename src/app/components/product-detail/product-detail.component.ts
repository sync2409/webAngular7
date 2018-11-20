import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';
import { GlobalVariable } from 'src/app/config/global';
declare var $:any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public ProductDetail;
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public PriceTem = 0;
  public Quantity = 0.1;
  constructor(private route: ActivatedRoute,
    private gval: GlobalconfigService,
    private productService: ProductService) { }
  public pID: number;
  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.route.params.subscribe(params => {
      console.log(params);
      this.pID = params.id;
      this.GetProductDetail(this.pID);
    });
  }
  setActiveTab(id) {
    $(".nav-tabs li").removeClass("active");
    $(".nav-tabs #" + id).addClass("active");
    $(".tab-content div").removeClass("active");
    $(".tab-content #" + id).addClass("active");
  }
  GetProductDetail(pID) {
    this.productService.GetListProducts(pID).subscribe((data: any) => {
      console.log("GetProductDetail", data);
      if (data.ListData.length > 0) {
        this.ProductDetail = data.ListData[0];
    this.PriceTem = this.Quantity * this.ProductDetail.Prices;
      }
    })
  }
  ChangeQuantity(txtQuantity) {
    console.log("ChangeQuantity", txtQuantity.value);
    this.PriceTem = txtQuantity.value * this.ProductDetail.Prices;
  }
}
