import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SummaryComponent
  ],
  exports: [
    SummaryComponent
  ]
})
export class SiteUiSharedUiModule {}
