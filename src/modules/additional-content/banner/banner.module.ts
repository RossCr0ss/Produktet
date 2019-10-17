import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { PlyrModule } from 'ngx-plyr';
import { BannerComponent } from '../../../components/additional-content/banner/banner.component';

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
