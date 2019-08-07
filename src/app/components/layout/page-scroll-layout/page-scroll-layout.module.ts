import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageScrollLayoutComponent} from './page-scroll-layout.component';
import {SharedModule} from "../../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PageScrollLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [PageScrollLayoutComponent],
  entryComponents: [PageScrollLayoutComponent]
})
export class PageScrollLayoutModule {
}

export function moduleName() {
  return 'PageScrollLayoutModule';
}

export function entryComponent() {
  return PageScrollLayoutComponent;
}
