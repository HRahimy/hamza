import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MailingSubscriptionComponent} from './mailing-subscription/mailing-subscription.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatLineModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatLineModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
  ],
  declarations: [
    MailingSubscriptionComponent,
  ],
  exports: [
    MailingSubscriptionComponent,
  ],
})
export class SiteUiFormsModule {
}
