import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextComponent} from '../../../components/additional-content/text/text.component';
import { SharedModule } from '../../../../../../produktet/src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TextComponent],
  entryComponents: [TextComponent]
})

export class TextModule {
}

export function moduleName() {
  return 'TextModule';
}

export function entryComponent() {
  return TextComponent;
}
