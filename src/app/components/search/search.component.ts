import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { GlobalVariable } from 'src/app/config/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private gval: GlobalconfigService,
  ) { }

  ngOnInit() {
    this.gval.setMenuStatus(true);
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      let textSearch = sessionStorage.getItem(GlobalVariable.TxtSearch);
      this.gval.updateBreadCrumb([
        { Name: "Trang chủ", Link: "/" },
        { Name: "Tìm kiếm", Link: "/" },
        { Name: textSearch, Link: "/" },
      ]);
    });
  }

}
