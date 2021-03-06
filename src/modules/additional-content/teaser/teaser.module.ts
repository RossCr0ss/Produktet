import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeaserComponent} from '../../../components/additional-content/teaser/teaser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TeaserComponent],
  entryComponents: [TeaserComponent]
})
export class TeaserModule {
}

export function moduleName() {
  return 'TeaserModule';
}

export function entryComponent() {
  return TeaserComponent;
}
