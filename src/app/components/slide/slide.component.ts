import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { ProductService } from 'src/app/services/product.service';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
declare var $: any;

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public ListData = [];
  public ListCateProducts = [];
  public _isShowSlide = false;
  public IsShoCurrentSlide = false;
  @ViewChildren('SetOwlSlide') things: QueryList<any>;

  constructor(
    private libService: LibsService,
    private productService: ProductService,
    private gval: GlobalconfigService
  ) { }
  ngAfterViewInit() {
    this.things.changes.subscribe(t => {
      //this.SetOwlSlide();
    });
  }
  ngOnInit() {
    this.gval.isShowSlide.subscribe(data => {
      this._isShowSlide = data
      //this.SetOwlSlide();
    });
    this.libService.GetListSlide().subscribe((data: any) => {
      console.log("GetListSlide", data.ListData);
      this.ListData = data.ListData;
      setTimeout(() => {
        this.SetOwlSlide();
        this.IsShoCurrentSlide = true;
      }, 2500);
    });
    this.GetListCateProduct();
  }
  SetOwlSlide() {
    console.log(1111)
    $('#slideshowowlcarousel').owlCarousel('destroy');
    $('#slideshowowlcarousel .owl-item').remove();
    $('#slideshowowlcarousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoWidth: true,
      items: 1
    });
    // setTimeout(() => {
    //   this.SetOwlSlide();
    // }, 1000);
  }
  GetListCateProduct() {
    this.productService.GetListCateProduct().subscribe((data: any) => {
      //console.log('ListCateProducts', data);
      this.ListCateProducts = data.ListData;
    });
  }

}
