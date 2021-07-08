import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from "@ngxs/store";
import {GlobalState, SkillsState} from "@hamza/site-ui/shared/state";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {environment} from "../environments/environment";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {SiteUiContentModule} from "@hamza/site-ui/content";
import {RouterModule, Routes} from "@angular/router";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SiteUiContentModule,
    NgxsModule.forRoot([
        GlobalState,
        SkillsState
      ],
      {
        developmentMode: !environment.production
      }),
    NgxsFormPluginModule.forRoot(),
    // NOTE: Always import dev tools plugin last
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
