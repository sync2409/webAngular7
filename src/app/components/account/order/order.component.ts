import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { OrderService } from 'src/app/services/order.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public ListData = [];
  constructor(
    private gval: GlobalconfigService,
    private orderService: OrderService,
    private accService: AccountService
  ) { }

  ngOnInit() {
    //this.gval.setIsShowSlide(false);
    this.GetMyOrder();
  }
  GetMyOrder() {
    this.orderService.GetListOrder().subscribe(data => {
      this.ListData = data.ListData;
    });

  }
}
