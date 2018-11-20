import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { GioiThieuComponent } from './components/gioi-thieu/gioi-thieu.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: 'product', component: ProductComponent , pathMatch:"full"},
  { path: 'product-detail/:id', component: ProductDetailComponent , pathMatch:"full"},
  { path: 'login', component: LoginComponent , pathMatch:"full"},
  { path: 'news', component: NewsComponent , pathMatch:"full"},
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
