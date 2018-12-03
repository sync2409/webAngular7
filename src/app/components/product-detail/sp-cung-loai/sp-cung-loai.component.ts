import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariable } from 'src/app/config/global';
import { NewsService } from 'src/app/services/news.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sp-cung-loai',
  templateUrl: './sp-cung-loai.component.html',
  styleUrls: ['./sp-cung-loai.component.css']
})
export class SpCungLoaiComponent implements OnInit {
  @Input('CateID') public _CateID;
  public ListData = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService,
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.productService.GetListProducts(0,this._CateID).subscribe((data:any)=>{
    console.log("SpCungLoaiComponent cateID", this._CateID, data.ListData)

      this.ListData = data.ListData;
    })
  }
}
