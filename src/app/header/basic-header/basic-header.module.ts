import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHeaderComponent } from './basic-header.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BasicHeaderComponent],
  entryComponents: [BasicHeaderComponent]
})
export class BasicHeaderModule { }

export function moduleName() {
  return 'BasicHeaderModule';
}

export function entryComponent() {
  return BasicHeaderComponent;
}
