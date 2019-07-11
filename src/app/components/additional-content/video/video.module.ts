import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoComponent],
  entryComponents: [VideoComponent]
})
export class VideoModule {
}

export function moduleName() {
  return 'VideoModule';
}

export function entryComponent() {
  return VideoComponent;
}
