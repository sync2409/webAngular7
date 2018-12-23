import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { GlobalVariable } from 'src/app/config/global';
import { ProductService } from 'src/app/services/product.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public ListProduct = [];
  public ListDish = [];
  public textSearch = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private gval: GlobalconfigService,
    private productService: ProductService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.gval.setIsShowSlide(false);
    this.activatedRoute.params.subscribe(params => {
      //console.log(params)
      this.textSearch = sessionStorage.getItem(GlobalVariable.TxtSearch);
      this.gval.updateBreadCrumb([
        { Name: "Trang chủ", Link: "/" },
        { Name: "Tìm kiếm", Link: "/" },
        { Name: this.textSearch, Link: "/" },
      ]);
      this.GetListProduct();
      this.GetListDish();
    });
  }
  GetListProduct() {
    this.productService.GetListProducts(0, 0, this.textSearch).subscribe((data: any) => {
      //console.log("GetListProducts search", this.textSearch, data);
      this.ListProduct = data.ListData;
    })
  };
  GetListDish() {
    this.newsService.GetListNews(0, GlobalVariable.CateDish, 1, this.textSearch).subscribe((data: any) => {
      //console.log("GetListNews search", this.textSearch, data);
      this.ListDish = data.ListData;
    });
  }
}
