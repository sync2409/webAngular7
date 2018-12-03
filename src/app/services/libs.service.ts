import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GlobalVariable } from '../config/global';

@Injectable({
  providedIn: 'root'
})
export class LibsService {
  public IsShowLoading: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor(private httpClient: HttpClient) { }
  SetLoading(v){
      this.IsShowLoading.next(v);
  }
  FormatMoney(argValue): any {
    if (argValue == '0')
      return 0;
    argValue += '';
    let x = argValue.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? ',' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
  }
  GetListSlide(): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'Slides/GetListSlides';
    return this.PostData(url, { CategoryID: GlobalVariable.CateSlideHome });
  }
  VideoGetList(_CategoryID): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'Media/VideoGetList';
    return this.PostData(url, { CategoryID: _CategoryID});
  }
  PostData(url: string, datapost: any): Observable<any> {
    try {
      const reqHeader = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${111}`
      });
      return this.httpClient.post<any>(url, JSON.stringify(datapost), { headers: reqHeader });
    } catch (error) {
      console.log(error);
    }
  }
}
