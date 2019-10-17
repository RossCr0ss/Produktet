import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

export function getSiteConfiguration(siteConfigurationService: SiteConfigurationService) {
  return () => siteConfigurationService.getConfiguration();
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: getSiteConfiguration, deps: [SiteConfigurationService], multi: true}
  ],
  declarations: []
})
export class CoreModule { }
