import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { GlobalconfigService } from '../../../../services/globalconfig.service';
import { LibsService } from '../../../../services/libs.service';
import { GlobalVariable } from '../../../../config/global';
import { ProductService } from 'src/app/services/product.service';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

declare var $: any;

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public ListData = [];
  public ListCateProducts = [];
  public _isShowSlide = false;
  public IsShoCurrentSlide = false;
  @ViewChildren('SetOwlSlide') things: QueryList<any>;
  @Input('CategoryID') public cateIDAlbum;
  @Input('CategoryName') public categoryName;
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
    this.GetListImage(this.cateIDAlbum, this.categoryName);
  }
  SetOwlSlide() {
    console.log(1111)
    $('#albumImageOwlcarousel').owlCarousel('destroy');
    $('#albumImageOwlcarousel .owl-item').remove();
    $('#albumImageOwlcarousel').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoWidth: true,
      items: 1
    });
  }

  GetListImage(CateID, CateName) {
    console.log("GetListImage")
    this.categoryName = CateName;
    this.libService.ImageGetList(CateID).subscribe(data => {
      this.ListData = data.ListData;
      setTimeout(() => {
        $('#albumImageOwlcarousel').owlCarousel('destroy');
        $('#albumImageOwlcarousel .owl-item').remove();
        $('#albumImageOwlcarousel').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 10000,
          autoplayHoverPause: true,
          autoWidth: true,
          items: 1
        });
        $('#albumImageOwlcarousel').on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY > 0) {
            $('#albumImageOwlcarousel').trigger('next.owl');
          } else {
            $('#albumImageOwlcarousel').trigger('prev.owl');
          }
          e.preventDefault();
        });
      }, 1000);
    })
  }
}
