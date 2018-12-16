import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.accountService.AccountInfo.subscribe(data => {
      if (data.AccountID <= 0) {
        this._router.navigate(['/login']);
      } 
    });
  }

}
