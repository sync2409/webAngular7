import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/DTO/account';
import { CartService } from 'src/app/services/cart.service';

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
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.accountService.AccountInfo.subscribe(value => this.AccountInfo = value);
    this.cartService.CartInfo.subscribe(value=> this.NumberInCart = value.length);
  }
  Logout(){
    this.accountService.Logout();
  }
}
