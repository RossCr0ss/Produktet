import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { BasicMenuComponent } from 'src/components/menu/basic-menu/basic-menu.component';

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
