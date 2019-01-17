import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';
import { IAccount } from 'src/app/DTO/account';
import { AccountService } from 'src/app/services/account.service';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  public ListCateProducts = [];
  constructor(
    private gval: GlobalconfigService,
    private accountService: AccountService,
    private productService: ProductService
  ) { }
  public ___isDetailMenu = true;
  public BreadCrumbsData = [{ Name: "Trang chủ", Link: "/" }];
  public AccountInfo = new IAccount();
  ngOnInit() {
    this.gval.isDetailMenu.subscribe(data => this.___isDetailMenu = data);
    this.gval.BreadCrumb.subscribe((data: any) => {
      this.BreadCrumbsData = data;
    })
    this.accountService.AccountInfo.subscribe(data => this.AccountInfo = data);
    this.GetListCateProduct();
  }
  GetListCateProduct() {
    this.productService.GetListCateProduct().subscribe((data: any) => {
      //console.log('ListCateProducts', data);
      this.ListCateProducts = data.ListData;
    });
  }
  showmenu() {
    var opacity = $(".menu_title ul.breacrum_menu").css('opacity');
    if (opacity == 0) {
      $(".menu_title ul.breacrum_menu").css({ "opacity": 1 });
    } else {
      $(".menu_title ul.breacrum_menu").css({ "opacity": 0 });
    }
  }
}
