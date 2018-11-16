import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AccountService } from 'src/app/services/account.service';
import { IAccount } from 'src/app/DTO/account';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(
    private accountService: AccountService
  ) { }
  public AccountInfo = new IAccount();
  ngOnInit() {
    this.accountService.AccountInfo.subscribe(value => this.AccountInfo = value);
  }
  Logout(){
    this.accountService.Logout();
  }
}
