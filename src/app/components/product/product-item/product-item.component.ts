import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { GlobalVariable } from 'src/app/config/global';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public ListProducts = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public isShowTest = false;
  @Input('parentData') public cateID;
  constructor(private gval: GlobalconfigService,
    private productService: ProductService) { }
  @ViewChildren('allTheseThings') things: QueryList<any>;

  ngOnInit() {
    console.log("parentData", this.cateID);
    this.GetListProduct(this.cateID);
    // setTimeout(() => {
    //   $('#prodctowlcarousel'+this.cateID).owlCarousel({
    //     loop: true,
    //     responsiveClass: true,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //       0: {
    //         items: 1,
    //         nav: true,
    //         loop: true
    //       },
    //       600: {
    //         items: 5,
    //         nav: false,
    //         loop: true
    //       },
    //       1000: {
    //         items: 8,
    //         nav: true,
    //         loop: true
    //       }
    //     }
    //   });
    // }, 1000);
  }
  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendred();
    });
  }

  ngForRendred() {
    console.log('NgFor is Rendered');
    this.isShowTest = true;

    
  }

  GetListProduct(cateID) {
    this.productService.GetListProducts(0,0).subscribe((data: any) => {
      console.log('GetListProducts', data);
      this.ListProducts = data.ListData;

    });
  }
}
