import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsComponent} from './skills/skills.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
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
