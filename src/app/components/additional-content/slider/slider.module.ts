import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import {NguCarouselModule} from "@ngu/carousel";
// import {FormsModule} from "@angular/forms";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
// import { SwiperComponent } from './swiper/swiper.component'

@NgModule({
  imports: [
    CommonModule,
    NguCarouselModule,
    NgxUsefulSwiperModule
  ],
  declarations: [SliderComponent],
  exports: [SliderComponent],
  entryComponents: [SliderComponent]
})
export class SliderModule {}

export function moduleName() {
  return 'SliderModule';
}

export function entryComponent() {
  return SliderComponent;
}
