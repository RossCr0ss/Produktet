import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SharedModule } from 'src/modules/shared/shared.module';
import { PageScrollContentComponent } from 'src/components/content/page-scroll-content/page-scroll-content.component';



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
