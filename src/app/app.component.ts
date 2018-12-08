import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from './config/global';
import { ProductService } from './services/product.service';
import { LibsService } from './services/libs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectCMS';

  constructor(
    private libService: LibsService,
    private productService : ProductService
  ) {

  }
  ngOnInit() {
    console.log("AppComponent");
    this.libService.GetListConfig();
    this.productService.GetListCateProduct().subscribe((data: any) => {
      sessionStorage.setItem(GlobalVariable.StorageCategoryProduct, JSON.stringify(data.ListData));
    });
  }
}
