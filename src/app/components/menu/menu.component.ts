import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';
import { IAccount } from 'src/app/DTO/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  constructor(
    private gval: GlobalconfigService,
    private accountService: AccountService
  ) { }
  public ___isDetailMenu = true;
  public AccountInfo = new IAccount();
  ngOnInit() {
    this.gval.isDetailMenu.subscribe(value => this.___isDetailMenu = value);
    this.accountService.AccountInfo.subscribe(value => this.AccountInfo = value);
  }
}
