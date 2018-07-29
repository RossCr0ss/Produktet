import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicContentComponent} from './basic-content.component';

@NgModule({
  imports: [
    CommonModule
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
