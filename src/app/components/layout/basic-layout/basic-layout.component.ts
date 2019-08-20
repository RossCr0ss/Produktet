import {Component, OnInit, OnDestroy} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Router} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';
import {SeoService} from '../../../shared/services/seo.service';
import {Site} from '../../../shared/models/site.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent implements OnInit, OnDestroy {

  configuration: Site;
  pageData: any;
  public cancelSubscription$: Subject<void> = new Subject<void>();

  constructor(private siteConfigurationService: SiteConfigurationService, private router: Router,
              private dataService: DataService, private seoService: SeoService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;

/*    this.dataService.getData(this.router.url)
      .pipe(takeUntil(this.cancelSubscription$))
      .subscribe((pageData: any) => {
        this.pageData = pageData;
        this.seoService.setMetaElement('metaDescription', this.pageData.data.metaDescription);
        this.seoService.setMetaElement('metaKeywords', this.pageData.data.metaKeywords);
        this.seoService.setTitle(this.pageData.data.title);
    });*/

  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }
}
