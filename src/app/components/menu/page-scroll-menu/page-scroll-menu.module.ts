import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageScrollMenuComponent} from './page-scroll-menu.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {NgxPageScrollModule} from "ngx-page-scroll";


@NgModule({
  declarations: [PageScrollMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxPageScrollModule
  ], exports: [
    PageScrollMenuComponent
  ], entryComponents: [
    PageScrollMenuComponent
  ]
})
export class PageScrollMenuModule {
}

export function moduleName() {
  return 'PageScrollMenuModule';
}

export function entryComponent() {
  return PageScrollMenuComponent;
}
