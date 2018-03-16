import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GetUsersComponent } from './get-users/get-users.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    GetUsersComponent
  ],
  imports: [
    BrowserModule,
      HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
