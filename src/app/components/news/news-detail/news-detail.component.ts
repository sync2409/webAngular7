import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  public cateID;
  public newID;
  public ObjNew;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private gval: GlobalconfigService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.gval.setIsShowSlide(false);
    this.route.params.subscribe(params => {
      this.cateID = params.cateID;
      this.newID = params.newID;
      this.GetDetaiMonAn();
    });
  }
  GetDetaiMonAn() {
    this.newsService.GetListNews(this.newID).subscribe((data: any) => {
      //console.log(data);
      this.ObjNew = data.ListData[0];
      this.gval.updateBreadCrumb(
        [
          { Name: "Trang chủ", Link: "/" },
          { Name: "Tin tức", Link: "/tin-tuc" },
          { Name: this.ObjNew.Title, Link: "/" },
        ]
      );
    })
  }
}
