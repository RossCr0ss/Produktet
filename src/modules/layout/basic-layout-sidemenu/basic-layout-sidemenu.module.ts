import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from 'src/components/layout/basic-layout/basic-layout.component';
import {RouterModule} from '@angular/router';
import { SharedModule } from 'src/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
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
