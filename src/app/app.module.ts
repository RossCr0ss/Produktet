import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from './shared/services/core.module';
import {environment} from '../environments/environment';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: false
    }),
    SlickCarouselModule
  ],
  providers: [
    {provide: 'BACKEND_API_URL', useValue: environment.backendApi},
    {provide: 'DEV_HOST_NAME', useValue: environment.hostName}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
