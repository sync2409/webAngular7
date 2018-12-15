import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from './config/global';
import { ProductService } from './services/product.service';
import { LibsService } from './services/libs.service';
import { AccountService } from './services/account.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectCMS';

  constructor(
    private libService: LibsService,
    private productService: ProductService
    , private accountService: AccountService,
    private cartService: CartService
  ) {

  }
  ngOnInit() {
    console.log("AppComponent");
    this.libService.GetListConfig();
    this.productService.GetListCateProduct().subscribe((data: any) => {
      sessionStorage.setItem(GlobalVariable.StorageCategoryProduct, JSON.stringify(data.ListData));
    });
    this.accountService.GetAccountInfo();
    this.accountService.AccountInfo.subscribe(data => {
      if (data && data.AccountID > 0) {
        this.cartService.UpdateAccountCart(data.AccountID);
      } else {
        this.cartService.UpdateAccountCart(0);
      }
    });
  }
}
