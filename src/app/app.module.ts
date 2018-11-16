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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GlobalconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
