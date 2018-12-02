import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  public IsShowLoading = false;
  constructor(
    private libs: LibsService
  ) { }

  ngOnInit() {
    this.libs.IsShowLoading.subscribe(data => this.IsShowLoading = data);
  }

}
