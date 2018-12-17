import { Component, OnInit } from '@angular/core';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent implements OnInit {

  constructor(
    private gval: GlobalconfigService
  ) { }
  ngOnInit() {
    this.gval.setIsShowSlide(true);
  }
}
