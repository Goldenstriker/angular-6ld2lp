import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchformComponent } from './searchform/searchform.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, SearchformComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
