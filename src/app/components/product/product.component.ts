import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  constructor(private gval: GlobalconfigService) { }
  ngOnInit() {
    this.gval.setMenuStatus(true);
  }

}
