import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public AccountInfo;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }
  Login(loginForm: NgForm) {
    console.log("loginForm",loginForm.value)
    var _data = loginForm.value;
    this.accountService.Login(_data.username, _data.password);
    this.accountService.AccountInfo.subscribe(value => this.AccountInfo = value);
  }
}
