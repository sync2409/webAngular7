import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';

@Component({
  selector: 'app-mon-an-chitiet',
  templateUrl: './mon-an-chitiet.component.html',
  styleUrls: ['./mon-an-chitiet.component.css']
})
export class MonAnChitietComponent implements OnInit {

  @Input('ProductID') public _ProductID;
  public productID;
  public newID;
  public ObjMonAn;
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private gval: GlobalconfigService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);

    this.gval.setIsShowSlide(false);

    this.route.params.subscribe(params => {
      console.log(params);
      this.productID = params.productID;
      this.newID = params.newID;
      this.GetDetaiMonAn();
    });
  }
  GetDetaiMonAn() {
    this.newsService.GetListNews(this.newID).subscribe((data: any) => {
      console.log(data);
      this.ObjMonAn = data.ListData[0];
      this.gval.updateBreadCrumb(
        [
          { Name: "Trang chủ", Link: "/" },
          { Name: "Món ăn", Link: "/" },
          { Name: this.ObjMonAn.Title, Link: "/" },
        ]
      );
    })
  }
}
