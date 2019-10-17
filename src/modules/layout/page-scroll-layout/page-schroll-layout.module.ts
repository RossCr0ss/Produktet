import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import { SharedModule } from 'src/modules/shared/shared.module';
import { PageScrollLayoutComponent } from 'src/components/layout/page-scroll-layout/page-scroll-layout.component';

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
