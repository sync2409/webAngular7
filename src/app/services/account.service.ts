import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAccount } from '../DTO/account';
import { Router } from '@angular/router';
import { GlobalVariable } from '../config/global';
import { CartService } from './cart.service';
import { LibsService } from './libs.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public AccountInfo: BehaviorSubject<any> = new BehaviorSubject<any>(new IAccount());
  public _AccountInfo: Observable<IAccount> = this.AccountInfo.asObservable();

  constructor(
    private httpClient: HttpClient
    , private _router: Router
    , private libService: LibsService
    , private toastMessage: ToastrService
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
  EditProfile(formEditProfile) {
    let url = GlobalVariable.BASE_API_URL + "FEAccount/update_account";
    this.libService.PostData(url, {
      FullName: formEditProfile.full_name,
      Email: formEditProfile.email,
      Phone: formEditProfile.phone,
      Gender: formEditProfile.gender ? 1 : 0,
      Adress: formEditProfile.address,
    }).subscribe((data: any) => {
      console.log("AccountService EditProfile", data);
      this.Logout();
    });
  }
  ChangePass(formChangePass) {
    let url = GlobalVariable.BASE_API_URL + "FEAccount/change_password";
    this.libService.PostData(url, {
      txtOldPassword: formChangePass.old_password,
      txtNewPassword: formChangePass.new_password,
      txtReNewPassword: formChangePass.confirm_new_password,
    }).subscribe((data: any) => {
      console.log("ChangePass", data);
      if (data.c > 0) {
        this.toastMessage.success('Đổi mật khẩu thành công', 'Thông báo');
        this.Logout();
      } else {
        this.toastMessage.error('Đổi mật khẩu không thành công', 'Thông báo');
      }

    });
  }
  GetAccountInfo() {
    let url = GlobalVariable.BASE_API_URL + "JwtAccount/authencation";
    this.libService.PostData(url, {}).subscribe((data: any) => {
      console.log("GetAccountInfo", data);
      if (data.code > 0) {
        this.AccountInfo.next(data.data);
      }
    }, error => {
      console.log("GetAccountInfo err", error)
      throw error;
    });
  }
  Login(UserName: string, UserPass: string) {
    let url = GlobalVariable.BASE_API_URL + "JwtAccount/Login";
    this.libService.PostData(url, {
      UserName: UserName,
      UserPass: UserPass
    }).subscribe((data: any) => {
      console.log("AccountService login", this.AccountInfo);
      localStorage.setItem(GlobalVariable.jwtTk, data.Token);
      this.AccountInfo.next(data.data);
      this._router.navigate(['/']);
    });
  }

  Logout() {
    let url = GlobalVariable.BASE_API_URL + "JwtAccount/logout";
    this.libService.GetData(url).subscribe((data: any) => {
      this.AccountInfo.next(new IAccount());
      localStorage.removeItem(GlobalVariable.jwtTk);
      console.log("AccountService Logout", this.AccountInfo);
    });
  }
}
