import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicGalleryComponent} from "./basicgallery.component";

import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  declarations: [BasicGalleryComponent],
  entryComponents: [BasicGalleryComponent]

})
export class BasicGalleryModule {
}

export function moduleName() {
  return 'BasicGalleryModule';
}

export function entryComponent() {
  return BasicGalleryComponent;
}
