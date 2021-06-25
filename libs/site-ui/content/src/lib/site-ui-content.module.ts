import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsComponent} from './skills/skills.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatLineModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SiteUiSharedUiModule} from "@hamza/site-ui/shared/ui";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatLineModule,
    MatToolbarModule,
    SiteUiSharedUiModule
  ],
  declarations: [
    SkillsComponent
  ],
  exports: [
    SkillsComponent
  ]
})
export class SiteUiContentModule {
}
