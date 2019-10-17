import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptLoaderDirective } from 'src/directives/script-loader.directive';
import { StyleLoaderDirective } from 'src/directives/style-loader.directive';
import { DynamicLoaderComponent } from 'src/components/shared/components/dynamic-component/dynamic-loader/dynamic-loader.component';
import { ErrorLayoutComponent } from 'src/components/shared/components/error-layout/error-layout/error-layout.component';
import { SafeHtmlPipe } from 'src/pipes/safe-html.pipe';

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
