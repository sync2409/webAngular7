import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../config/global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  GetListProducts() {
    let url = GlobalVariable.BASE_API_URL + "Products/GetListProducts";
    return this.httpClient.post(url, {});
  }
}
