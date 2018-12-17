import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';

declare var $:any;

@Component({
  selector: 'app-huong-dan',
  templateUrl: './huong-dan.component.html',
  styleUrls: ['./huong-dan.component.css']
})
export class HuongDanComponent implements OnInit {
  public ListData = [];
  public htmeee = '';
  constructor(
    public sanitizer: DomSanitizer,
    private videoService: LibsService,
    private gval : GlobalconfigService
  ) { }

  ngOnInit() {
    this.gval.setIsShowSlide(true);
    this.videoService.VideoGetList(GlobalVariable.CateVideoHuongDan).subscribe((data: any) => {
      this.ListData = data.ListData;
      console.log(11)
      setTimeout(() => {
        this.ListData.forEach(element => {
          $("#htmlYoutube" + element.VideoID).attr('src', element.VideoUrl);
        });
      }, 1000);
    });

  }
  trackByHeroes(item) {
    return item.VideoID;
  }
}
