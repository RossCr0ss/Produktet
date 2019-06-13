import {Component, OnInit, OnDestroy} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Router} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';
import {SeoService} from '../../../shared/services/seo.service';
import {Site} from '../../../shared/models/site.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-m-box-layout',
  templateUrl: './m-box-layout.component.html',
  styleUrls: ['./m-box-layout.component.css']
})
export class BasicLayoutComponent implements OnInit, OnDestroy {
  public cancelSubscription$: Subject<void> = new Subject<void>();
  configuration: Site;
  pageData: any;

  constructor(private siteConfigurationService: SiteConfigurationService, private router: Router,
              private dataService: DataService, private seoService: SeoService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;

    this.dataService.getData(this.router.url)
    .pipe(takeUntil(this.cancelSubscription$))
    .subscribe((pageData: any) => {
      this.pageData = pageData;
      this.seoService.setMetaElement('metaDescription', this.pageData.data.metaDescription);
      this.seoService.setMetaElement('metaKeywords', this.pageData.data.metaKeywords);
      this.seoService.setTitle(this.pageData.data.title);
    });

  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }
}
