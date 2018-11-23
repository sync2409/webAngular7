import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit {
  public CartData = [];
  public NumberInCart: number = 0;
  public TotalPriceTem: number = 0;
  public TotalShip: number = 0;
  public isCheckOtherAddress: boolean = false;
  public paymentStatus: number = 1;
  public bank_info: string = 'vcb';
  constructor(private gval: GlobalconfigService
    , private cartService: CartService
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.cartService.CartInfo.subscribe((data: any) => {
      this.CartData = data;
      this.NumberInCart = data.length;
      this.SumValueTotalTemp();
    });
  }
  changedCheckOtherAddress = (evt) => {
    this.isCheckOtherAddress = !this.isCheckOtherAddress;
  }
  SumValueTotalTemp() {
    this.TotalPriceTem = 0;
    this.CartData.forEach(element => {
      let pidTem = element.ProductID;
      this.TotalPriceTem += element.Prices * element.Quantity;
    });
  }
  update_payment(value) {
    this.paymentStatus = value;
  }
  update_bank_info(value){
    this.bank_info = value;
  }


}
