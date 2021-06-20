import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppScaffoldComponent} from './app-scaffold/app-scaffold.component';
import {SiteUiSharedUiModule} from "@hamza/site-ui/shared/ui";

@NgModule({
  imports: [
    CommonModule,
    SiteUiSharedUiModule
  ],
  declarations: [
    AppScaffoldComponent
  ],
  exports: [
    AppScaffoldComponent
  ]
})
export class SiteUiLayoutModule {
}
