import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  Login(UserName:string, UserPass:string) {
    let url = "//jwt.gsukien.vn/api/Account/Login";
    this.httpClient.post(url, {
      UserName: UserName,
      UserPass: UserPass
    }).subscribe((data:any)=>{
      console.log("getAccountInfo", data);
    })
  }
}
