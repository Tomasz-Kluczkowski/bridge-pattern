import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbstractMediaViewComponent } from './media-view-components/abstract-media-view/abstract-media-view.component';
import { LongMediaViewComponent } from './media-view-components/long-media-view/long-media-view.component';
import { ShortMediaViewComponent } from './media-view-components/short-media-view/short-media-view.component';
import {RouterModule} from '@angular/router';
import {MainRoutingModule} from './main/main-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AbstractMediaViewComponent,
    LongMediaViewComponent,
    ShortMediaViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MainRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
