import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-gio-hang',
  templateUrl: './gio-hang.component.html',
  styleUrls: ['./gio-hang.component.css']
})
export class GioHangComponent implements OnInit {
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;
  public CartData = [];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.CartInfo.subscribe((data: any) => {
      this.CartData = data;
    })
  }
  RemoveProduct(product){
this.cartService.RemoveProduct(product);
  }

}
