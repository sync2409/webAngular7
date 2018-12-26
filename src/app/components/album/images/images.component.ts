import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { LibsService } from 'src/app/services/libs.service';
import { GlobalVariable } from 'src/app/config/global';
import { ProductService } from 'src/app/services/product.service';
import { GlobalconfigService } from 'src/app/services/globalconfig.service';
import { ImageItemComponent } from './image-item/image-item.component';
declare var $: any;


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public ListData = [];
  public BASE_URL_MEDIA = GlobalVariable.BASE_URL_MEDIA;

  constructor(
    private gval: GlobalconfigService,
    private libService: LibsService

  ) { }
  @ViewChild(ImageItemComponent) child: ImageItemComponent;
  ngOnInit() {
    this.gval.setIsShowSlide(false);
    this.libService.MediaGetList(1).subscribe(data => {
      this.ListData = data.ListData;
    })
  }
  ChangeAlbumChild(CateID, CateName) {
    this.child.GetListImage(CateID,CateName);
  }

}
