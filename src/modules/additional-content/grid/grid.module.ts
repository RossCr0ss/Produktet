import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from '../../../../../../produktet/src/app/components/additional-content/grid/grid.component';

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
