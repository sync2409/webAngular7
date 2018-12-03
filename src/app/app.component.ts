import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from './config/global';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectCMS';

  constructor(
    private productService: ProductService
  ) {

  }
  ngOnInit() {
    this.productService.GetListCateProduct().subscribe((data: any) => {
      sessionStorage.setItem(GlobalVariable.StorageCategoryProduct, JSON.stringify(data.ListData));
    });
  }
}
