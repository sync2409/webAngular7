
import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { IAccount } from 'src/app/DTO/account';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public accountInfo = new IAccount();
  public isShowFormChangePass = false;
  constructor(
    private gval: GlobalconfigService,
    private accountService: AccountService,
    private _router: Router,
    
  ) { }

  ngOnInit() {
    this.gval.setIsShowSlide(false);
    this.accountService.AccountInfo.subscribe(data => {
      if (data.AccountID > 0) {
        this.accountInfo = data;
      } else {
        //this._router.navigate(['/login']);
      }

    });
  }
  EditProfile(formEditProfile) {
    console.log("formEditProfile", formEditProfile.value);
    this.accountService.EditProfile(formEditProfile.value)
  }
  ShowFormChangePass() {
    this.isShowFormChangePass = !this.isShowFormChangePass;
  }
  ChangePassWord(formChangePass) {
    this.accountService.ChangePass(formChangePass.value)
  }
}

