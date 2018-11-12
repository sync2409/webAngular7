import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { GlobalconfigService } from './services/globalconfig.service';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalconfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
