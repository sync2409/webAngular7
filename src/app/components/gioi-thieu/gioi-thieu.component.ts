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
  public ObjGioiThieu;
  public ObjHuongDan;
  public ObjThanhToan;
  public ObjGiaoNhan;
  constructor(
    private gval: GlobalconfigService,
    private newsService: NewsService
  ) { }
  ngOnInit() {
    this.gval.setMenuStatus(false);
    this.newsService.GetListNews(0, GlobalVariable.CateGioiThieu, 0).subscribe((data: any) => {
      let _lst = data.ListData;
      this.ListData = data.ListData;
      console.log("GetListNews gioi thieu", data.ListData);
      this.ObjGioiThieu = _lst.find(function (f) {
        return f.NewID == GlobalVariable.TinGioiThieu;
      });
      this.ObjHuongDan = _lst.find(function (f) {
        return f.NewID == GlobalVariable.TinHuongDan;
      });
      this.ObjThanhToan = _lst.find(function (f) {
        return f.NewID == GlobalVariable.TinThanhToan;
      });
      this.ObjGiaoNhan = _lst.find(function (f) {
        return f.NewID == GlobalVariable.TinGiaoNhan;
      });
      setTimeout(() => {
        let hastag = location.hash;
        console.log("GioiThieuComponent hash", hastag);
        if (hastag.length > 0) {
          this.setActiveTab(hastag.replace("#", ""));
        }
      }, 500);
    });

  }
  setActiveTab(id) {
    $(".tab-content .tab-pane, .introduction li").removeClass("active");
    $(".tab-content #" + id).addClass("active");
    $("#menu-" + id).parent().addClass("active");
    $(this).addClass("active");
  }
}
