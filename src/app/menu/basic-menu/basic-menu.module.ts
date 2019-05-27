import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicMenuComponent} from './basic-menu.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [BasicMenuComponent],
  entryComponents: [BasicMenuComponent]
})
export class BasicMenuModule {
}

export function moduleName() {
  return 'BasicMenuModule';
}

export function entryComponent() {
  return BasicMenuComponent;
}
