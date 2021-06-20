import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SiteUiLayoutModule} from "@hamza/site-ui/layout";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SiteUiLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
