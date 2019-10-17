import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/modules/shared/shared.module';
import { BasicHeaderComponent } from 'src/components/header/basic-header/basic-header.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BasicHeaderComponent],
  entryComponents: [BasicHeaderComponent]
})
export class BasicHeaderModule { }

export function moduleName() {
  return 'BasicHeaderModule';
}

export function entryComponent() {
  return BasicHeaderComponent;
}
