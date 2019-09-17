import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageScrollContentComponent} from './dynamikfabrikken-content.component';
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [PageScrollContentComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [PageScrollContentComponent],
  entryComponents: [PageScrollContentComponent]
})
export class PageScrollContentModule {
}

export function moduleName() {
  return 'PageScrollContentModule';
}

export function entryComponent() {
  return PageScrollContentComponent;
}
