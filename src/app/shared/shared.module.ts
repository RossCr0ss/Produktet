import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScriptLoaderDirective} from './script-loader.directive';
import {StyleLoaderDirective} from './style-loader.directive';
import {DynamicLoaderComponent} from './dynamic-component/dynamic-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScriptLoaderDirective,
    StyleLoaderDirective,
    DynamicLoaderComponent
  ],
  exports: [
    ScriptLoaderDirective,
    StyleLoaderDirective,
    DynamicLoaderComponent
  ]
})
export class SharedModule { }
