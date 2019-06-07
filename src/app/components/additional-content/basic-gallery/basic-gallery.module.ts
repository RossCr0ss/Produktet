import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicGalleryComponent} from "./basic-gallery.component";

@NgModule({
  imports: [
    CommonModule
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
