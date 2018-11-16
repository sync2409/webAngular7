import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
declare var $:any;
@Component({
  selector: 'app-gioi-thieu',
  templateUrl: './gioi-thieu.component.html',

})
export class GioiThieuComponent implements OnInit {

  constructor(private gval: GlobalconfigService) { }
  ngOnInit() {
    this.gval.setMenuStatus(false);
  }
  setActiveTab(id) {
    $(".tab-content .tab-pane, .introduction li").removeClass("active");
    $(".tab-content #" + id).addClass("active");
    $(this).addClass("active");
  }
}
