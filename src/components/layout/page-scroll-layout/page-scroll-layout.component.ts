import {Component, OnInit, Inject} from '@angular/core';
import {Router} from "@angular/router";
import { SeoService } from 'src/services/seo.service';
import {DOCUMENT} from "@angular/common";
import { ISite } from 'src/interfaces/site';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

@Component({
  selector: 'app-page-scroll-layout',
  templateUrl: './page-scroll-layout.component.html',
  styleUrls: ['./page-scroll-layout.component.scss']
})
export class PageScrollLayoutComponent implements OnInit {

  configuration: ISite;
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
