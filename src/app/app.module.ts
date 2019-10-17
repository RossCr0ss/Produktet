import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { CoreModule } from 'src/modules/core/core.module';
import {environment} from '../environments/environment';
import { SharedModule } from 'src/modules/shared/shared.module';
import {RouterModule} from '@angular/router';

import {SlickCarouselModule} from 'ngx-slick-carousel';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { SliderModule } from 'src/modules/additional-content/slider/slider.module';
// import { SliderModule } from './components/additional-content/slider/swiper/swiper.module';

@NgModule({
  declarations: [
    AppComponent,  
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    SliderModule,
    RouterModule.forRoot([], {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: false
    }),
    SlickCarouselModule
  ],
  providers: [
    {provide: 'BACKEND_API_URL', useValue: environment.backendApi},
    {provide: 'DEV_HOST_NAME', useValue: environment.hostName},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
