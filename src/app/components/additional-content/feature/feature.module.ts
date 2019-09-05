import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureComponent} from './feature.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureComponent],
  entryComponents: [FeatureComponent]
})
export class FeatureModule {
}

export function moduleName() {
  return 'FeatureModule';
}

export function entryComponent() {
  return FeatureComponent;
}
