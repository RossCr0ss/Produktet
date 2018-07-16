import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScriptLoaderDirective} from './script-loader.directive';
import {StyleLoaderDirective} from './style-loader.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScriptLoaderDirective,
    StyleLoaderDirective
  ],
  exports: [
    ScriptLoaderDirective,
    StyleLoaderDirective
  ]
})
export class SharedModule { }
