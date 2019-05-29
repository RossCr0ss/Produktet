import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicContentComponent} from './basic-content.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BasicContentComponent],
  entryComponents: [BasicContentComponent]
})
export class BasicContentModule {
}

export function moduleName() {
  return 'BasicContentModule';
}

export function entryComponent() {
  return BasicContentComponent;
}
