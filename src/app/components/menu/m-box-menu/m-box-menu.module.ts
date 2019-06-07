import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicMenuComponent} from './m-box-menu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
