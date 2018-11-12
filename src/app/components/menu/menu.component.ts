import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../../config/global';
import { GlobalconfigService } from '../../services/globalconfig.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  constructor(private gval: GlobalconfigService) { }
  public _isDetailMenu = true;
  ngOnInit() {
    this.gval.isDetailMenu.subscribe(value => this._isDetailMenu = value);
    console.log(this._isDetailMenu)
  }
}
