import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nhom-san-pham',
  templateUrl: './nhom-san-pham.component.html',
  styles: []
})
export class NhomSanPhamComponent implements OnInit {

  constructor(private gval: GlobalconfigService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
  }

}
