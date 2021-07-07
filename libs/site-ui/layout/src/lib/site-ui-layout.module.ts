import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppScaffoldComponent} from './app-scaffold/app-scaffold.component';
import {SiteUiSharedUiModule} from "@hamza/site-ui/shared/ui";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from "@angular/material/divider";
import {MatLineModule} from "@angular/material/core";
import {SiteUiContentModule} from "@hamza/site-ui/content";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@hamza/site-ui/content').then(m => m.SiteUiContentModule),
  },
  {
    path: 'subscribe',
    loadChildren: () => import('@hamza/site-ui/forms').then(m => m.SiteUiFormsModule),
  }
];

@NgModule({
  imports: [
    CommonModule,
    SiteUiSharedUiModule,
    MatTabsModule,
    MatDividerModule,
    MatLineModule,
    SiteUiContentModule,
    RouterModule.forRoot(routes),
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
