import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-mon-an',
  templateUrl: './mon-an.component.html',
  styleUrls: ['./mon-an.component.css']
})
export class MonAnComponent implements OnInit {
  @Input('ProductID') public _ProductID;
  @Input('CateID') public _CateID;
  public ListData = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    console.log("MonAnComponent ProductID", this._ProductID,this._CateID)
    this.newsService.GetListNewsByProductID(this._ProductID).subscribe((data:any)=>{
      this.ListData = data.ListData;
    })
  }

}
