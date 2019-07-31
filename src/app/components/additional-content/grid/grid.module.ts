import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridComponent],
  entryComponents: [GridComponent]
})
export class GridModule {
}

export function moduleName() {
  return 'GridModule';
}

export function entryComponent() {
  return GridComponent;
}
