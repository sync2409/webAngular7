import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { NewsService } from 'src/app/services/news.service';
declare var $: any;

@Component({
  selector: 'app-gioithieu',
  templateUrl: './gioithieu.component.html',
  styleUrls: ['./gioithieu.component.css']
})
export class GioithieuComponent implements OnInit {
  public NoiDungGioiThieu;
  public ListData = [];
  constructor(
    private videoService: LibsService,
    private libService: LibsService,

  ) { }

  ngOnInit() {
    this.videoService.VideoGetList(GlobalVariable.CateVideoGioiThieu).subscribe((data: any) => {
      this.ListData = data.ListData;
      setTimeout(() => {
        if (this.ListData.length > 0) {
          $("#htmlYoutube").attr('src', this.libService.GetYoutubeUrlEmbed(this.ListData[0].VideoUrl));
        }
      }, 300);
    });
    this.libService.GetListConfig().subscribe((data: any) => {
      //console.log("GetListConfig", data.ListData)
      this.NoiDungGioiThieu = data.ListData.find(function (f) {
        return f.ID == 3;
      });
    });
  }

}
