import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from 'src/app/config/global';
import { NewsService } from 'src/app/services/news.service';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public ListData = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public _CateID= GlobalVariable.CateNews;
  constructor(
    private newsService: NewsService,
    private gval:GlobalconfigService
  ) { }

  ngOnInit() {
    this.gval.setIsShowSlide(false);
    //console.log("MonAnComponent ProductID", this._ProductID,this._CateID)
    this.newsService.GetListNews(0, this._CateID).subscribe((data:any)=>{
      this.ListData = data.ListData;
    })
  }
}
