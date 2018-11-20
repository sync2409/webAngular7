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

    this.GetListProduct();
    $("#btnAll").click(function(){
      alert(1)
    })
  }
  InitCarousel(){
    $('.tab-content .tab-pane .owl-carousel').owlCarousel({
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
  GetListProduct(){
    this.productService.GetListProducts().subscribe((data: any) => {
      console.log("GetListProducts", data);
      this.ListProducts = data.ListData;
      setTimeout(() => {
      console.log("setTimeout");

      }, 100);
    });
  }
}
