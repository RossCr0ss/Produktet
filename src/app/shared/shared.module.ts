import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScriptLoaderDirective} from './directives/script-loader.directive';
import {StyleLoaderDirective} from './directives/style-loader.directive';
import {DynamicLoaderComponent} from './components/dynamic-component/dynamic-loader.component';
import {ErrorLayoutComponent} from './components/error-layout/error-layout.component';
import {SafeHtmlPipe} from "./directives/safe-html.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScriptLoaderDirective,
    StyleLoaderDirective,
    DynamicLoaderComponent,
    ErrorLayoutComponent,
    SafeHtmlPipe
  ],
  exports: [
    ScriptLoaderDirective,
    StyleLoaderDirective,
    DynamicLoaderComponent,
    ErrorLayoutComponent,
    SafeHtmlPipe
  ],
  entryComponents: [
    ErrorLayoutComponent,
    DynamicLoaderComponent
  ]
})
export class SharedModule { }
