import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from '../../services/globalconfig.service';
import { AccountService } from 'src/app/services/account.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private gval: GlobalconfigService) { }
  ngOnInit() {
    this.gval.setMenuStatus(false);
    this.gval.setIsShowSlide(true);
    //console.log("HomeComponent")
  }
}
