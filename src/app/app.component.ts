import {Component, OnDestroy, OnInit} from '@angular/core';
import { SiteConfigurationService } from 'src/services/site-configuration.service';
import { GeneralData } from 'src/shared/models/general-data.model';
import { SeoService } from 'src/services/seo.service';
import { ISite } from 'src/interfaces/site';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  configuration: ISite;
  public cancelSubscription$: Subject<void> = new Subject<void>();

  constructor(private siteConfigurationService: SiteConfigurationService,
              private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;

      const generalData = this.siteConfigurationService.configuration.generalData;

      if (generalData.ScriptHead) {
        this.seoService.setBeforeHead(generalData.ScriptHead);
      }
      if (generalData.ScriptBodyTop) {
        this.seoService.setBeforeBody(generalData.ScriptBodyTop);
      }
      if (generalData.ScriptBodyBottom != null) {
        this.seoService.setAfterBody(generalData.ScriptBodyBottom);
      }

  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }

}
