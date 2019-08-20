import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Router} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';
import {SeoService} from '../../../shared/services/seo.service';
import {Site} from '../../../shared/models/site.model';

@Component({
  selector: 'app-basic-layout-sidemenu',
  templateUrl: './basic-layout-sidemenu.component.html',
  styleUrls: ['./basic-layout-sidemenu.component.css']
})
export class BasicLayoutComponent implements OnInit {

  configuration: Site;
  pageData: any;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;
  }
}
