import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-nhom-san-pham',
  templateUrl: './nhom-san-pham.component.html',
  styles: []
})
export class NhomSanPhamComponent implements OnInit {
  public cateID = 0;
  public CurrentCate;
  public ListCateProduct = [];
  public ListProduct = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  constructor(
    private gval: GlobalconfigService,
    private productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.gval.updateBreadCrumb([
      { Name: "Trang chủ", Link: "/" },
    ]);

    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.cateID = parseInt(params.get('cateID'));
      this.SetCateProduct();
    })

  }
  SetCateProduct() {
    var that = this;
    this.ListCateProduct = this.productService.GetListCateProductSessionStorage();
    this.CurrentCate = this.ListCateProduct.find(function (f) {
      return f.CategoryID == that.cateID;
    });
    let defaultCate = this.ListCateProduct.filter(function (f) {
      return f.ParentID == that.CurrentCate.CategoryID;
    })
    if (defaultCate.length > 0) {
      this.GetListProduct(defaultCate[0].CategoryID);
    }
    this.gval.setMenuStatus(true);
    this.gval.updateBreadCrumb([
      { Name: "Trang chủ", Link: "/" },
      { Name: this.CurrentCate.CategoryName, Link: "/" },
    ]);
  }
  GetListProduct(_CateID) {
    this.productService.GetListProducts(0, _CateID).subscribe((data: any) => {
      this.ListProduct = data.ListData;
    });
  }

}
