import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { GlobalVariable } from 'src/app/config/global';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public ListProduct = [];
  public textSearch = "";
  constructor(
    private activatedRoute: ActivatedRoute,
    private gval: GlobalconfigService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.textSearch = sessionStorage.getItem(GlobalVariable.TxtSearch);
      this.gval.updateBreadCrumb([
        { Name: "Trang chủ", Link: "/" },
        { Name: "Tìm kiếm", Link: "/" },
        { Name: this.textSearch, Link: "/" },
      ]);
      this.productService.GetListProducts(0, 0, this.textSearch).subscribe((data: any) => {
        console.log("GetListProducts search", this.textSearch, data);
        this.ListProduct = data.ListData;
      })
    });
  }

}
