import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SharedModule } from 'src/modules/shared/shared.module';
import { MBoxContentComponent } from 'src/components/content/m-box-content/m-box-content.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [MBoxContentComponent],
  entryComponents: [MBoxContentComponent]
})

export class MBoxContentModule {
}

export function moduleName() {
  return 'MBoxContentModule';
}

export function entryComponent() {
  return MBoxContentComponent;
}
