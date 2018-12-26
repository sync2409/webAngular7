import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GlobalVariable } from '../config/global';

@Injectable({
  providedIn: 'root'
})
export class LibsService {
  public IsShowLoading: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  public ListConfig: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpClient: HttpClient) { }
  SetLoading(v) {
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
    return this.PostData(url, { CategoryID: _CategoryID });
  }
  ImageGetList(_CategoryID): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'Media/ImageGetList';
    return this.PostData(url, { CategoryID: _CategoryID });
  }

  MediaGetList(_MediaType): Observable<any> {
    let url = GlobalVariable.BASE_API_URL + 'Media/GetList';
    return this.PostData(url, { MediaType: _MediaType });
  }

  GetListConfig(): Observable<any>  {
    let url = GlobalVariable.BASE_API_URL + 'systems/config_g';
    return this.PostData(url, {});
  }
  PostData(url: string, datapost: any): Observable<any> {
    try {
    var accesstoken = 'Bearer ' + localStorage.getItem(GlobalVariable.jwtTk);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': accesstoken
        })
      };
      return this.httpClient.post<any>(url, JSON.stringify(datapost), httpOptions);
    } catch (error) {
      //console.log(error);
    }
  }
  GetData(url: string): Observable<any> {
    try {
    var accesstoken = 'Bearer ' + localStorage.getItem(GlobalVariable.jwtTk);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': accesstoken
        })
      };
      return this.httpClient.get<any>(url,  httpOptions);
    } catch (error) {
      //console.log(error);
    }
  }
  SlugUrl(str: any): any {
    var title, slug;
    //Lấy text từ thẻ input title
    title = str;

    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    //In slug ra textbox có id “slug”
    return slug;
  }
}
