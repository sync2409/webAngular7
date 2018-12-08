import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { GlobalVariable } from 'src/app/config/global';
import { LibsService } from 'src/app/services/libs.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public ListDataCustomerSaid = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public ThoiGianLamViec = {};
  constructor(
    private newsService: NewsService,
    private libService: LibsService,
  ) { }

  ngOnInit() {
    this.newsService.GetListNews(0, GlobalVariable.CateKhachHangNhanXet, 0).subscribe((data: any) => {
      let _lst = data.ListData;
      this.ListDataCustomerSaid = data.ListData;
      console.log("GetListNews CateKhachHangNhanXet", data.ListData);
    });
    this.libService.ListConfig.subscribe((data: any) => {
     this.ThoiGianLamViec = data.find(function (f) {
        return f.ID == 1;
      });
    });
  }
}
