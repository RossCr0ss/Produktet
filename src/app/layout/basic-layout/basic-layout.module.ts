import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BasicLayoutComponent],
  exports: [BasicLayoutComponent],
  entryComponents: [BasicLayoutComponent]
})
export class BasicLayoutModule { }

export function moduleName() {
  return 'BasicLayoutModule';
}

export function entryComponent() {
  return BasicLayoutComponent;
}
