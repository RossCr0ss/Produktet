import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageScrollContentComponent} from './page-scroll-content.component';
import {SharedModule} from "../../../shared/shared.module";
import { InViewportModule } from '@thisissoon/angular-inviewport';


@NgModule({
  declarations: [PageScrollContentComponent],
  imports: [
    CommonModule,
    InViewportModule,
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
