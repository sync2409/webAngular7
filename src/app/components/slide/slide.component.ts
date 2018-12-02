import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { ProductService } from 'src/app/services/product.service';
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
  constructor(
    private libService: LibsService,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.libService.GetListSlide().subscribe((data: any) => {
      console.log("GetListSlide", data.ListData);
      this.ListData = data.ListData;
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
    });
this.GetListCateProduct();
  }
  GetListCateProduct() {
    this.productService.GetListCateProduct().subscribe((data: any) => {
      console.log('ListCateProducts', data);
      this.ListCateProducts = data.ListData;
    });
  }

}
