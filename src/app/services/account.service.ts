import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAccount } from '../DTO/account';
import { Router } from '@angular/router';
import { GlobalVariable } from '../config/global';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public AccountInfo: BehaviorSubject<any> = new BehaviorSubject<any>(new IAccount());

  constructor(
    private httpClient: HttpClient
    , private _router: Router
    //, private cartService: CartService
  ) { }
  Register(formRegister) {
    let url = GlobalVariable.BASE_API_URL + "FEAccount/add_account";
    this.httpClient.post<IAccount>(url, {
      AccountID: 0,
      AccountType: 1,
      Username: formRegister.email,
      FullName: formRegister.full_name,
      Password: formRegister.password,
      repassword: formRegister.confirm_password,
      Email: formRegister.email,
      Phone: formRegister.phone,
      Gender: formRegister.gender,
      Adress: formRegister.address,
    }).subscribe((data: any) => {
      console.log("AccountService Register", data);
      this._router.navigate(['/login']);
    });
  }
  Login(UserName: string, UserPass: string) {
    let url = GlobalVariable.BASE_API_URL + "JwtAccount/Login";
    this.httpClient.post<IAccount>(url, {
      UserName: UserName,
      UserPass: UserPass
    }).subscribe((data: any) => {
      console.log("AccountService login", this.AccountInfo);
      localStorage.setItem(GlobalVariable.jwtTk, data.Token);
      this.AccountInfo.next(data.data);
      this._router.navigate(['/']);
    });
  }
  GetAccountInfo() {
    var accesstoken = 'Bearer ' + localStorage.getItem(GlobalVariable.jwtTk);
    let url = GlobalVariable.BASE_API_URL + "JwtAccount/authencation";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': accesstoken
      })
    };
    this.httpClient.post(url, {}, httpOptions)
      .subscribe((data: any) => {
        console.log("GetAccountInfo", data);
        if (data.code > 0) {
          this.AccountInfo.next(data.data);
        }
      }, error => {
        console.log("GetAccountInfo err", error)
        throw error;
      });
  }
  Logout() {
    var accesstoken = localStorage.getItem(GlobalVariable.jwtTk);
    let url = GlobalVariable.BASE_API_URL + "JwtAccount/logout";
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accesstoken}`
    });
    this.httpClient.get(url, { headers: reqHeader })
      .subscribe((data: any) => {
        this.AccountInfo.next(new IAccount());
        localStorage.removeItem(GlobalVariable.jwtTk);
        console.log("AccountService Logout", this.AccountInfo);
      });
  }

}
