import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-mon-an-chitiet',
  templateUrl: './mon-an-chitiet.component.html',
  styleUrls: ['./mon-an-chitiet.component.css']
})
export class MonAnChitietComponent implements OnInit {
  
  @Input('ProductID') public _ProductID;
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    // this.newsService.GetListNews(0,)
  }

}
