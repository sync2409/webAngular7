import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
declare var $:any;

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.css']
})
export class GioithieuComponent implements OnInit {

  public ListData = [];
  constructor(
    private videoService: LibsService
  ) { }

  ngOnInit() {
    this.videoService.VideoGetList(GlobalVariable.CateVideoGioiThieu).subscribe((data: any) => {
      this.ListData = data.ListData;
      setTimeout(() => {
        if(this.ListData.length>0){
          $("#htmlYoutube").attr('src', this.ListData[0].VideoUrl);
        }
      }, 300);
    });
  }

}
