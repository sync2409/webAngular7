import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styles: []
})
export class SlideComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    setTimeout(() => {
      $('#slideshowowlcarousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoWidth: true,
        items: 1
      });
    }, 500);
  }

}
