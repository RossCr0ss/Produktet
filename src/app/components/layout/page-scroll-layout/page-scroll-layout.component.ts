import {Component, OnInit, Inject} from '@angular/core';
import {Site} from "../../../shared/models/site.model";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {Router} from "@angular/router";
import {SeoService} from "../../../shared/services/seo.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-page-scroll-layout',
  templateUrl: './page-scroll-layout.component.html',
  styleUrls: ['./page-scroll-layout.component.css']
})
export class PageScrollLayoutComponent implements OnInit {

  configuration: Site;
  pageData: any;

  constructor(@Inject(DOCUMENT) private document: any,private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

  ngAfterViewInit(): void {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.text = `


    `;
    this.document.head.appendChild(script);
  }
}
