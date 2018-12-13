import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GioiThieuComponent } from './components/gioi-thieu/gioi-thieu.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { GioHangComponent } from './components/gio-hang/gio-hang.component';
import { ThanhToanComponent } from './components/thanh-toan/thanh-toan.component';
import { NhomSanPhamComponent } from './components/nhom-san-pham/nhom-san-pham.component';
import { HuongDanComponent } from './components/huong-dan/huong-dan.component';
import { LienHeComponent } from './components/lien-he/lien-he.component';
import { HinhThucThanhToanComponent } from './components/hinh-thuc-thanh-toan/hinh-thuc-thanh-toan.component';
import { MonAnChitietComponent } from './components/product-detail/mon-an/mon-an-chitiet/mon-an-chitiet.component';
import { MonAnComponent } from './components/product-detail/mon-an/mon-an.component';
import { VideoComponent } from './components/video/video.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { VideoGioithieuComponent } from './components/video/video-gioithieu/video-gioithieu.component';

const routes: Routes = [

  { path: 'san-pham', component: ProductComponent , pathMatch:"full"},
  { path: 'chi-tiet/:id', component: ProductDetailComponent , pathMatch:"full"},
  { path: 'chi-tiet/:cateID/:id/:title', component: ProductDetailComponent , pathMatch:"full"},
  { path: 'don-hang/thanh-toan', component: ThanhToanComponent , pathMatch:"full"},
  { path: 'nhom-san-pham/nhom/:cateID/:title', component: NhomSanPhamComponent , pathMatch:"full"},
  { path: 'mon-an/:productID', component: MonAnComponent , pathMatch:"full"},
  { path: 'mon-an/:cateID/:productID/:newID/:title', component: MonAnChitietComponent , pathMatch:"full"},
  { path: 'video', component: VideoComponent , pathMatch:"full"},
  { path: 'video/gioi-thieu', component: VideoGioithieuComponent , pathMatch:"full"},

  { path: 'tim-kiem/:textSearch', component: SearchComponent , pathMatch:"full"},
  { path: 'login', component: LoginComponent , pathMatch:"full"},
  { path: 'dang-ky', component: RegisterComponent , pathMatch:"full"},
  { path: 'lien-he', component: LienHeComponent , pathMatch:"full"},
  { path: 'thanh-toan', component: HinhThucThanhToanComponent , pathMatch:"full"},
  { path: 'huong-dan', component: HuongDanComponent , pathMatch:"full"},
  { path: 'gio-hang', component: GioHangComponent , pathMatch:"full"},
  { path: 'tin-tuc', component: NewsComponent , pathMatch:"full"},
  { path: 'gioi-thieu', component: GioiThieuComponent , pathMatch:"full"},
  { path: '', component: HomeComponent , pathMatch:"full"},
  { path: '**', component: PageNotFoundComponent , pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  ProductComponent,
  NewsComponent,
  HomeComponent,
  PageNotFoundComponent
]
