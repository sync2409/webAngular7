import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GlobalconfigService } from './services/globalconfig.service';
import { FooterComponent } from './components/footer/footer.component';
import { GioiThieuComponent } from './components/gioi-thieu/gioi-thieu.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SlideComponent } from './components/slide/slide.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {CarouselModule} from 'ngx-bootstrap/carousel'
import { from } from 'rxjs';
import { HtmlPipe, SafeUrl } from './html.pipe';
import { HuongDanComponent } from './components/huong-dan/huong-dan.component';
import { GioHangComponent } from './components/gio-hang/gio-hang.component';
import { ThanhToanComponent } from './components/thanh-toan/thanh-toan.component';
import { NhomSanPhamComponent } from './components/nhom-san-pham/nhom-san-pham.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { CommonPipe, FilterList, SlugUrl } from './pipes/common.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { NgvarDirective } from './directives/ngvar.directive';
import { LienHeComponent } from './components/lien-he/lien-he.component';
import { HinhThucThanhToanComponent } from './components/hinh-thuc-thanh-toan/hinh-thuc-thanh-toan.component';
import { SpCungLoaiComponent } from './components/product-detail/sp-cung-loai/sp-cung-loai.component';
import { MonAnComponent } from './components/product-detail/mon-an/mon-an.component';
import { MonAnChitietComponent } from './components/product-detail/mon-an/mon-an-chitiet/mon-an-chitiet.component';
import { VideoComponent } from './components/video/video.component';
import { EmbedVideo } from 'ngx-embed-video';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    GioiThieuComponent,
    ProductDetailComponent,
    SlideComponent,
    LoginComponent,
    HtmlPipe,
    HuongDanComponent,
    GioHangComponent,
    ThanhToanComponent,
    NhomSanPhamComponent,
    ProductItemComponent,
    CommonPipe,
    FilterList,
    LoadingComponent,
    NgvarDirective,
    SafeUrl,
    LienHeComponent,
    HinhThucThanhToanComponent,
    SlugUrl,
    SpCungLoaiComponent,
    MonAnComponent,
    MonAnChitietComponent,
    VideoComponent
  ],
  exports: [
    NgvarDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    EmbedVideo.forRoot()
  ],
  providers: [GlobalconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
