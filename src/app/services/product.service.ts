import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../config/global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  GetListProducts(ProductID = 0, CategoryID = 0, PageNumber = 1, PageSize = 1000) {

    let url = GlobalVariable.BASE_API_URL + "Products/GetListProducts";
    return this.httpClient.post(url, {
      CategoryID: CategoryID,
      PageNumber: PageNumber,
      PageSize: PageSize,
      ProductID: ProductID,
      TextSearch: "",
    });
  }
}
