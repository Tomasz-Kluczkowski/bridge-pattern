import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaViewComponentComponent } from './media-view-components/media-view-component/media-view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaViewComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
