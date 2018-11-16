import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';
declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  constructor(private gval: GlobalconfigService) { }
  ngOnInit() {
    setTimeout(() => {
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
    }, 300);
  }

}
