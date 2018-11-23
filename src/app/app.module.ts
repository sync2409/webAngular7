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
import { HtmlPipe } from './html.pipe';
import { HuongDanComponent } from './components/huong-dan/huong-dan.component';
import { GioHangComponent } from './components/gio-hang/gio-hang.component';
import { ThanhToanComponent } from './components/thanh-toan/thanh-toan.component';
import { NhomSanPhamComponent } from './components/nhom-san-pham/nhom-san-pham.component';

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
    NhomSanPhamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [GlobalconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
