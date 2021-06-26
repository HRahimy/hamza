import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SummaryComponent} from './summary/summary.component';
import {MatLineModule} from "@angular/material/core";
import {FooterComponent} from './footer/footer.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HeaderedListComponent} from './headered-list/headered-list.component';
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MailingSubscriberFormComponent} from './mailing-subscriber-form/mailing-subscriber-form.component';
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule,
    MatLineModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    NgxsFormPluginModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    SummaryComponent,
    FooterComponent,
    HeaderedListComponent,
    MailingSubscriberFormComponent
  ],
  exports: [
    SummaryComponent,
    FooterComponent,
    HeaderedListComponent,
    MailingSubscriberFormComponent
  ]
})
export class SiteUiSharedUiModule {
}
