import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YoutubevideoComponent} from '../../../components/additional-content/youtubevideo/youtubevideo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [YoutubevideoComponent],
  entryComponents: [YoutubevideoComponent]
})
export class YoutubevideoModule {
}

export function moduleName() {
  return 'YoutubevideoModule';
}

export function entryComponent() {
  return YoutubevideoComponent;
}
