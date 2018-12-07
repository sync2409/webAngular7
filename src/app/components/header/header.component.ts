import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/DTO/account';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public AccountInfo = new IAccount();
  public NumberInCart = 0;
  constructor(
    private accountService: AccountService,
    private cartService: CartService,
    private _router: Router,
    private gval: GlobalconfigService,
    private libs: LibsService
  ) { }

  ngOnInit() {
    this.accountService.AccountInfo.subscribe(data => this.AccountInfo = data);
    this.cartService.CartInfo.subscribe(data => this.NumberInCart = data.OrderDetail.length);
  }
  Logout() {
    this.accountService.Logout();
  }
  Search(obj) {
    this._router.navigate(['/tim-kiem/', this.libs.SlugUrl(obj.value.txtSearch)]);
    sessionStorage.setItem(GlobalVariable.TxtSearch, obj.value.txtSearch);
  }
}
