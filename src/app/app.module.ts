import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GlobalconfigService } from './services/globalconfig.service';
import { FooterComponent } from './components/footer/footer.component';
import { GioiThieuComponent } from './components/gioi-thieu/gioi-thieu.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SlideComponent } from './components/slide/slide.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    GioiThieuComponent,
    ProductDetailComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
