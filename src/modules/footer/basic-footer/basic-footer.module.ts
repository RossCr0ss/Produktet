import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BasicFooterComponent } from 'src/components/footer/basic-footer/basic-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BasicFooterComponent],
  exports: [
    BasicFooterComponent
  ],
  entryComponents: [BasicFooterComponent]
})
export class BasicFooterModule {
}

export function moduleName() {
  return 'BasicFooterModule';
}

export function entryComponent() {
  return BasicFooterComponent;
}
