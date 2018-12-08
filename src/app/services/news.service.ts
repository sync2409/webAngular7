import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../config/global';
import { LibsService } from './libs.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private libs: LibsService
  ) { }
  GetListNews(NewID: number = 0, CategoryID: number = 0, IsFilter: number = 1,
    TextSearch: string = "", PageNumber: number = 1, PageSize: number = 10): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'news/getlistnews';
    let dataPost = {
      NewID: NewID,
      CategoryID: CategoryID,
      TextSearch: TextSearch,
      PageNumber: PageNumber,
      PageSize: PageSize,
      IsFilter: IsFilter
    };
    let data = this.libs.PostData(url, dataPost);
    console.log("GetListNews", NewID, CategoryID, data);
    return data;
  }

  GetListNewsByProductID(ProductID = 0, PageNumber = 1, PageSize = 10): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'news/GetListNewsByProductID';
    let dataPost = {
      ProductID: ProductID,
      PageNumber: PageNumber,
      PageSize: PageSize,
    };
    let data = this.libs.PostData(url, dataPost);
    console.log("GetListNewsByProductID", ProductID, data);
    return data;
  }
}
