import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video.component';
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  imports: [
    CommonModule,
    PlyrModule
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
