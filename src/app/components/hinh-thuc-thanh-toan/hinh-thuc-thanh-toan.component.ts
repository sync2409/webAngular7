import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { NewsService } from 'src/app/services/news.service';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-hinh-thuc-thanh-toan',
  templateUrl: './hinh-thuc-thanh-toan.component.html',
  styleUrls: ['./hinh-thuc-thanh-toan.component.css']
})
export class HinhThucThanhToanComponent implements OnInit {
  public ObjThanhToan;
  constructor(
    private gval: GlobalconfigService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.gval.updateBreadCrumb([
      { Name: "Trang chủ", Link: "/" },
      { Name: "Hình thức than toán", Link: "/" },
    ]);

    this.newsService.GetListNews(0, GlobalVariable.CateGioiThieu, 0).subscribe((data: any) => {
      let _lst = data.ListData;
      this.ObjThanhToan = _lst.find(function (f) {
        return f.NewID == GlobalVariable.TinThanhToan;
      });
    });
  }
}
