import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicHeaderComponent } from './basic-header.component';

@NgModule({
  imports: [
    CommonModule
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
