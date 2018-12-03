import { Component, OnInit } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-huong-dan',
  templateUrl: './huong-dan.component.html',
  styleUrls: ['./huong-dan.component.css']
})
export class HuongDanComponent implements OnInit {
  public ListData = [];
  constructor(
    public sanitizer : DomSanitizer,
    private videoService: LibsService
  ) { }

  ngOnInit() {
    this.videoService.VideoGetList(GlobalVariable.CateVideoHuongDan).subscribe((data: any) => {
      this.ListData = data.ListData;
    });
  }
  videoURL(v) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(v);
  }
}
