import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {environment} from '../environments/environment';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot([], {initialNavigation: false})
  ],
  providers: [
    {provide: 'BACKEND_API_URL', useValue: environment.backendApi}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
