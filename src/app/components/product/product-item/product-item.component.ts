import { Component, OnInit, ViewChildren, QueryList, Input, EventEmitter, Output } from '@angular/core';
import { GlobalVariable } from 'src/app/config/global';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';
import { LibsService } from 'src/app/services/libs.service';
declare var $: any;

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public ListProducts = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public cateIDChild = 0;
  @Input('parentData') public ListCateParentData;
  @Input('CategoryID') public cateIDParent;
  @Output() public productItemEvent = new EventEmitter();
  constructor(
    private gval: GlobalconfigService
    , private productService: ProductService
    , private libs: LibsService
  ) { }
  @ViewChildren('allTheseThings') things: QueryList<any>;

  ngOnInit() {
    let that = this;
    //console.log("ListCateParentData", this.ListCateParentData);
    var defaultCate = this.ListCateParentData.filter(function (f) {
      return f.ParentID == that.cateIDParent;
    })
    console.log('defaultCate', defaultCate);

    if (defaultCate.length > 0) {
      this.cateIDChild = defaultCate[0].CategoryID;
      this.libs.SetLoading(true);
      this.GetListProduct(defaultCate[0].CategoryID);
    }
  }
  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      this.ngForRendred();
    });
  }
  public ChangeCate(_cateID, event) {
    $("#divMenuBlock" + this.cateIDParent + ' li').removeClass("active");
    $(event.currentTarget.offsetParent).addClass("active")
    $("#prodctowlcarousel" + this.cateIDParent).hide();
    this.cateIDChild = _cateID;
    this.GetListProduct(_cateID);
    this.ngForRendred();
  }


  GetListProduct(_cateID) {
    this.productService.GetListProducts(0, _cateID).subscribe((data: any) => {
      console.log('GetListProducts', data);
      if (data.ListData.length == 0) {
        setTimeout(() => {
          this.libs.SetLoading(false);
        }, 200);
      }
      this.ListProducts = data.ListData;
    });
  }
  ngForRendred() {
    setTimeout(() => {
      $('#prodctowlcarousel' + this.cateIDParent).owlCarousel('destroy');
      $('#prodctowlcarousel' + this.cateIDParent + ' .owl-item').remove();
      $('#prodctowlcarousel' + this.cateIDParent).owlCarousel({
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
      $("#prodctowlcarousel" + this.cateIDParent).fadeIn();
      setTimeout(() => {
        this.libs.SetLoading(false);
      }, 200);

    }, 100);
  }
}
