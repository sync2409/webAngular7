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
  public BreadCrumbsData = [];
  public AccountInfo = new IAccount();
  ngOnInit() {
    this.gval.isDetailMenu.subscribe(data => this.___isDetailMenu = data);
    this.gval.BreadCrumb.subscribe((data: any) => {
      this.BreadCrumbsData = data;
    })
    this.accountService.AccountInfo.subscribe(data => this.AccountInfo = data);
  }
}
