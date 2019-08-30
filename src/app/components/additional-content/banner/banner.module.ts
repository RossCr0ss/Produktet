import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner.component';
import { PlyrModule } from 'ngx-plyr';

@NgModule({
  imports: [
    PlyrModule,
    CommonModule
  ],
  declarations: [BannerComponent],
  entryComponents: [BannerComponent]
})
export class BannerModule {
}

export function moduleName() {
  return 'BannerModule';
}

export function entryComponent() {
  return BannerComponent;
}
