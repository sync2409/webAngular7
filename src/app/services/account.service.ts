import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAccount } from '../DTO/account';
import { Router } from '@angular/router';
import { GlobalVariable } from '../config/global';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _AccountInfo: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public AccountInfo: Observable<IAccount> = this._AccountInfo.asObservable();

  constructor(private httpClient: HttpClient
    , private _router: Router) { }
  Login(UserName: string, UserPass: string) {
    let url = GlobalVariable.BASE_API_URL + "Account/Login";
    this.httpClient.post<IAccount>(url, {
      UserName: UserName,
      UserPass: UserPass
    }).subscribe((data: any) => {
      console.log("AccountService login", this.AccountInfo);
      localStorage.setItem(GlobalVariable.jwtTk, data.Token);
      this._AccountInfo.next(data.data);
      this._router.navigate(['/']);
    });
  }
  GetAccountInfo() {
      var accesstoken = localStorage.getItem(GlobalVariable.jwtTk);
      let url = GlobalVariable.BASE_API_URL + "Account/authencation";
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accesstoken}`
      });
      this.httpClient.get(url, { headers: reqHeader })
        .subscribe((data: any) => {
          this._AccountInfo.next(data.data);
          console.log("GetAccountInfo", this.AccountInfo);
        }, error => {
          //in case of error, add the callback to bring the item back and re-throw the error.
          console.log(error)
          throw error;
        });
  }
  Logout() {
    var accesstoken = localStorage.getItem(GlobalVariable.jwtTk);
    let url = GlobalVariable.BASE_API_URL + "Account/logout";
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accesstoken}`
    });
    this.httpClient.get(url, { headers: reqHeader })
      .subscribe((data: any) => {
        this._AccountInfo.next(null);
        localStorage.removeItem(GlobalVariable.jwtTk);
        console.log("AccountService login", this.AccountInfo);
      });
  }

}
