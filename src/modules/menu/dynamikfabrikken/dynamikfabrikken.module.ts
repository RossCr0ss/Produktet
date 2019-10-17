import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NgxPageScrollModule} from "ngx-page-scroll";
import { PageScrollMenuComponent } from 'src/components/menu/page-scroll-menu/page-scroll-menu.component';
import { SharedModule } from 'src/modules/shared/shared.module';


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
