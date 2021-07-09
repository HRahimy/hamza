import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatLineModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SkillsSimpleComponent} from './skills-simple/skills-simple.component';
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from "./footer/footer.component";
import {SiteUiContentComponent} from './site-ui-content/site-ui-content.component';
import {RouterModule, Routes} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {MailingSubscriptionComponent} from "./mailing-subscription/mailing-subscription.component";
import { SkillDetailComponent } from './skill-detail/skill-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsSimpleComponent,
  },
  {
    path: 'subscribe',
    component: MailingSubscriptionComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatLineModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
  ],
  declarations: [
    SkillsSimpleComponent,
    FooterComponent,
    SiteUiContentComponent,
    MailingSubscriptionComponent,
    SkillDetailComponent
  ],
  exports: [
    SkillsSimpleComponent,
    FooterComponent,
    SiteUiContentComponent,
    MailingSubscriptionComponent
  ]
})
export class SiteUiContentModule {
}
