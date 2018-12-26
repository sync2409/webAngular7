import { Component, OnInit, Input } from '@angular/core';
import { GlobalconfigService } from '../../../../services/globalconfig.service';
import { LibsService } from '../../../../services/libs.service';
import { GlobalVariable } from '../../../../config/global';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

declare var $: any;

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  public ListData = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  public slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor(
    private gval: GlobalconfigService,
    private libService: LibsService
  ) { }
  @Input('CategoryID') public cateIDAlbum;
  @Input('CategoryName') public categoryName;
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }
  ngOnInit() {
    this.gval.setIsShowSlide(false);
    this.GetListImage(this.cateIDAlbum, this.categoryName);
  }
  GetListImage(CateID, CateName) {
    console.log("GetListImage")
    this.categoryName = CateName;
    this.libService.ImageGetList(CateID).subscribe(data => {
      this.ListData = data.ListData;
      setTimeout(() => {
        $('#AlbumImageCarousel').owlCarousel('destroy');
        $('#AlbumImageCarousel .owl-item').remove();
        $('#AlbumImageCarousel').owlCarousel({
          loop: true,
          autoplay: true,
          autoplayTimeout: 10000,
          autoplayHoverPause: true,
          autoWidth: true,
          items: 1
        });
        $('#AlbumImageCarousel').on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY > 0) {
            $('#AlbumImageCarousel').trigger('next.owl');
          } else {
            $('#AlbumImageCarousel').trigger('prev.owl');
          }
          e.preventDefault();
        });
      }, 2000);
    })
  }

}
