import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryComponent} from './summary/summary.component';
import {MatLineModule} from "@angular/material/core";
import {FooterComponent} from './footer/footer.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    CommonModule,
    MatLineModule,
    MatDividerModule,
    MatToolbarModule
  ],
  declarations: [
    SummaryComponent,
    FooterComponent
  ],
  exports: [
    SummaryComponent,
    FooterComponent
  ]
})
export class SiteUiSharedUiModule {
}
