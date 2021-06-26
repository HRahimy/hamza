import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SiteUiLayoutModule} from "@hamza/site-ui/layout";
import {NgxsModule} from "@ngxs/store";
import {GlobalState} from "@hamza/site-ui/shared/state";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SiteUiLayoutModule,
    NgxsModule.forRoot([
        GlobalState
      ],
      {
        developmentMode: !environment.production
      }),
    NgxsFormPluginModule.forRoot(),
    // NOTE: Always import logger plugin last
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
