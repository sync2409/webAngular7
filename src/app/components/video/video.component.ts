import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
declare var $:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public ListData = [];
  constructor(
    public sanitizer : DomSanitizer,
    private videoService: LibsService
  ) { }

  ngOnInit() {
    this.videoService.VideoGetList(GlobalVariable.CateVideoTrangChu).subscribe((data: any) => {
      console.log("VideoComponent",data);
      this.ListData = data.ListData;
      setTimeout(() => {
        this.ListData.forEach(element => {
          $("#htmlYoutube" + element.VideoID).attr('src', element.VideoUrl);
        });
      }, 1000);
    });
  }

}
