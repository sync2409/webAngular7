import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { NewsService } from 'src/app/services/news.service';
import { GlobalVariable } from 'src/app/config/global';
declare var $: any;
@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',

})
export class GioiThieuComponent implements OnInit {
  public ListData = [];
  constructor(
    private gval: GlobalconfigService,
    private newsService: NewsService
  ) { }
  ngOnInit() {
    this.gval.setMenuStatus(false);
    this.newsService.GetListNews(0, GlobalVariable.CateGioiThieu).subscribe((data: any) => {
      this.ListData = data.ListData;
      console.log("GetListNews gioi thieu", data.ListData);
    });
  }
  setActiveTab(id) {
    $(".tab-content .tab-pane, .introduction li").removeClass("active");
    $(".tab-content #" + id).addClass("active");
    $(this).addClass("active");
  }
}
