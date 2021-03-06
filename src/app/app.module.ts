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
import { from } from 'rxjs';
import { HtmlPipe, SafeUrl } from './html.pipe';
import { HuongDanComponent } from './components/huong-dan/huong-dan.component';
import { GioHangComponent } from './components/gio-hang/gio-hang.component';
import { ThanhToanComponent } from './components/thanh-toan/thanh-toan.component';
import { NhomSanPhamComponent } from './components/nhom-san-pham/nhom-san-pham.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { CommonPipe, FilterList, SlugUrl, CustomSortArrayPipe, SubString, FormatDateTime, ReplaceRegex } from './pipes/common.pipe';
import { LoadingComponent } from './components/loading/loading.component';
import { NgvarDirective } from './directives/ngvar.directive';
import { LienHeComponent } from './components/lien-he/lien-he.component';
import { HinhThucThanhToanComponent } from './components/hinh-thuc-thanh-toan/hinh-thuc-thanh-toan.component';
import { SpCungLoaiComponent } from './components/product-detail/sp-cung-loai/sp-cung-loai.component';
import { MonAnComponent } from './components/product-detail/mon-an/mon-an.component';
import { MonAnChitietComponent } from './components/product-detail/mon-an/mon-an-chitiet/mon-an-chitiet.component';
import { VideoComponent } from './components/video/video.component';
import { EmbedVideo } from 'ngx-embed-video';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { GioithieuComponent } from './components/home/gioithieu/gioithieu.component';
import { VideoGioithieuComponent } from './components/video/video-gioithieu/video-gioithieu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuLeftComponent } from './components/account/menu-left/menu-left.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { OrderComponent } from './components/account/order/order.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { ImagesComponent } from './components/album/images/images.component';
import { ImageItemComponent } from './components/album/images/image-item/image-item.component';
// import { CarouselModule } from 'angular4-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';

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
    SubString,
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
    VideoComponent,
    CustomSortArrayPipe,
    SearchComponent,
    RegisterComponent,
    GioithieuComponent,
    VideoGioithieuComponent,
    MenuLeftComponent,
    ProfileComponent,
    OrderComponent,
    FormatDateTime,
    NewsDetailComponent,
    ReplaceRegex,
    ImagesComponent,
    ImageItemComponent
  ],
  exports: [
    NgvarDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EmbedVideo.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // CarouselModule
    SlickCarouselModule
  ],
  providers: [GlobalconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
