import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, AfterViewInit {
  public ListProducts = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public isShowTest = false;
  constructor(private gval: GlobalconfigService,
    private productService: ProductService) { }
  @ViewChildren('allTheseThings') things: QueryList<any>;
  @ViewChildren('allTheseThings2') things2: QueryList<any>;

  ngOnInit() {
    this.GetListProduct();
  }
  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendred();
    });
    this.things2.changes.subscribe(t => {
      console.log('things2 is Rendered');
    });
  }

  ngForRendred() {
    console.log('NgFor is Rendered');
    this.isShowTest = true;

    setTimeout(() => {
      $('#prodctowlcarousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
            loop: true
          },
          600: {
            items: 5,
            nav: false,
            loop: true
          },
          1000: {
            items: 8,
            nav: true,
            loop: true
          }
        }
      });
      $('#prodctowlcarousel2').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
            loop: true
          },
          600: {
            items: 5,
            nav: false,
            loop: true
          },
          1000: {
            items: 8,
            nav: true,
            loop: true
          }
        }
      });
      
    }, 100);


  }

  GetListProduct() {
    this.productService.GetListProducts().subscribe((data: any) => {
      console.log('GetListProducts', data);
      this.ListProducts = data.ListData;

    });
  }
}
