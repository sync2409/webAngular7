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
  GetListNews(NewID = 0, CategoryID = 0, PageNumber = 1, PageSize = 10): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'news/getlistnews';
    let dataPost = {
      NewID: NewID,
      CategoryID: CategoryID,
      PageNumber: PageNumber,
      PageSize: PageSize,
    };
    let data = this.libs.PostData(url, dataPost);
    console.log("GetListNews", NewID, CategoryID, data);
    return data;
  }
}
