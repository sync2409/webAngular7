import { Component, OnInit,Input } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
 public ListProducts = [];
 public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  constructor(private gval: GlobalconfigService,
    private productService : ProductService) { }
  ngOnInit() {
    setTimeout(() => {

    }, 300);
    this.GetListProduct();
  }

  GetListProduct(){
    this.productService.GetListProducts().subscribe((data: any) => {
      console.log("GetListProducts", data);
      this.ListProducts = data.ListData;
    });
  }

  FinishNgFor(last1111){
    console.log("FinishNgFor",last1111);
    last1111 = false;
    $('.tab-content .owl-carousel').owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 5,
          nav: false
        },
        1000: {
          items: 8,
          nav: true,
          loop: true
        }
      }
    })
  }
}
