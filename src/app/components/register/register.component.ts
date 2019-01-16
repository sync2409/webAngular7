import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public isRead = false;
  constructor(
    private accountService: AccountService,
    private gval: GlobalconfigService
  ) { }

  ngOnInit() {
    this.gval.setIsShowSlide(false);
  }
  Register(formRegister) {
    //console.log("formRegister",formRegister, formRegister.value);
    this.accountService.Register(formRegister.value)
  }
}
