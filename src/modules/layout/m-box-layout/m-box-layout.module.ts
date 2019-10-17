import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { BasicLayoutComponent } from 'src/components/layout/m-box-layout/m-box-layout.component';
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
