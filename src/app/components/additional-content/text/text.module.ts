import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextComponent} from './text.component';

@NgModule({
  imports: [
    CommonModule
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
