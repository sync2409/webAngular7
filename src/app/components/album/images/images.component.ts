import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { ProductService } from 'src/app/services/product.service';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
declare var $: any;


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(
    private gval: GlobalconfigService

  ) { }

  ngOnInit() {
    this.gval.setIsShowSlide(false);
    setTimeout(() => {
      $('#AlbumImageCarousel').owlCarousel('destroy');
      $('#AlbumImageCarousel .owl-item').remove();
      $('#AlbumImageCarousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
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
    }, 1000);
  }

}
