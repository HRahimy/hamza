import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryComponent} from './summary/summary.component';
import {MatLineModule} from "@angular/material/core";
import {FooterComponent} from './footer/footer.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { HeaderedListComponent } from './headered-list/headered-list.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [
    CommonModule,
    MatLineModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    SummaryComponent,
    FooterComponent,
    HeaderedListComponent
  ],
  exports: [
    SummaryComponent,
    FooterComponent,
    HeaderedListComponent
  ]
})
export class SiteUiSharedUiModule {
}
