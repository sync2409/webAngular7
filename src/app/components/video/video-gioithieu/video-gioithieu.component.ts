import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
declare var $:any;

@Component({
  selector: 'app-video-gioithieu',
  templateUrl: './video-gioithieu.component.html',
  styleUrls: ['./video-gioithieu.component.css']
})
export class VideoGioithieuComponent implements OnInit {
  public ListData = [];
  constructor(
    private libService: LibsService
  ) { }

  ngOnInit() {
    // this.videoService.VideoGetList(GlobalVariable.CateVideoGioiThieu).subscribe((data: any) => {
    //   this.ListData = data.ListData;
    //   setTimeout(() => {
    //     this.ListData.forEach(element => {
    //       $("#htmlYoutube" + element.VideoID).attr('src', element.VideoUrl);
    //     });
    //   }, 300);
    // });
    this.libService.VideoGetList(GlobalVariable.CateVideoGioiThieu).subscribe((data: any) => {
      this.ListData = data.ListData;
      setTimeout(() => {
        if(this.ListData.length>0){
          $("#htmlYoutube").attr('src', this.libService.GetYoutubeUrlEmbed(this.ListData[0].VideoUrl));
        }
      }, 300);
    });
  }
}
