import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppScaffoldComponent} from './app-scaffold/app-scaffold.component';
import {SiteUiSharedUiModule} from "@hamza/site-ui/shared/ui";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import {MatLineModule} from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    SiteUiSharedUiModule,
    MatTabsModule,
    MatDividerModule,
    MatLineModule
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
