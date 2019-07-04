import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MBoxContentComponent} from './m-box-content.component';
import {SharedModule} from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MBoxContentComponent],
  entryComponents: [MBoxContentComponent]
})

export class MBoxContentModule {
}

export function moduleName() {
  return 'MBoxContentModule';
}

export function entryComponent() {
  return MBoxContentComponent;
}
