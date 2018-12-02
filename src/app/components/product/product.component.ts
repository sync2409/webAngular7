import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  public ListCateProducts = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public isShowTest = false;
  constructor(private gval: GlobalconfigService,
    private productService: ProductService) { }

  ngOnInit() {
    this.GetListCateProduct();
  }
  ngAfterViewInit() {
   
  }

  GetListCateProduct() {
    this.productService.GetListCateProduct().subscribe((data: any) => {
      console.log('ListCateProducts', data);
      this.ListCateProducts = data.ListData;

    });
  }
}
