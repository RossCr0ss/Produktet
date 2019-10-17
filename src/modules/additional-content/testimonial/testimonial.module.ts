import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestimonialComponent} from '../../../components/additional-content/testimonial/testimonial.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestimonialComponent],
  entryComponents: [TestimonialComponent]
})
export class TestimonialModule {
}

export function moduleName() {
  return 'TestimonialModule';
}

export function entryComponent() {
  return TestimonialComponent;
}
