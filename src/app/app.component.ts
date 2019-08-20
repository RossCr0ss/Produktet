import {Component, OnDestroy, OnInit} from '@angular/core';
import {SiteConfigurationService} from './shared/services/site-configuration.service';
import {GeneralData} from './shared/models/general-data.model';
import {DataService} from './shared/services/data.service';
import {SeoService} from './shared/services/seo.service';
import {Site} from './shared/models/site.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  configuration: Site;
  public cancelSubscription$: Subject<void> = new Subject<void>();

  constructor(private siteConfigurationService: SiteConfigurationService,
              private dataService: DataService,
              private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.configuration = this.siteConfigurationService.configuration;

    this.dataService.getGeneralData()
    .pipe(takeUntil(this.cancelSubscription$))
    .subscribe((generalData: GeneralData) => {

      if (generalData.ScriptHead) {
        this.seoService.setBeforeHead(generalData.ScriptHead);
      }
      if (generalData.ScriptBodyTop) {
        this.seoService.setBeforeBody(generalData.ScriptBodyTop);
      }
      if (generalData.ScriptBodyBottom != null) {
        this.seoService.setAfterBody(generalData.ScriptBodyBottom);
      }
    });

  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }

}
