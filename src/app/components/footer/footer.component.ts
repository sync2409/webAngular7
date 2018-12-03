import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public ListDataCustomerSaid = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsService.GetListNews(0, GlobalVariable.CateKhachHangNhanXet, 0).subscribe((data: any) => {
      let _lst = data.ListData;
      this.ListDataCustomerSaid = data.ListData;
      console.log("GetListNews CateKhachHangNhanXet", data.ListData);
    });
  }

}
