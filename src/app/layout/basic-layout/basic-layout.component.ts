import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../shared/services/site-configuration.service';
import {Router} from '@angular/router';
import {DataService} from '../../shared/services/data.service';
import {SeoService} from '../../shared/services/seo.service';
import {Site} from "../../shared/model/site.model";

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent implements OnInit {

  configuration: Site;
  pageData: any;

  constructor(private siteConfigurationService: SiteConfigurationService, private router: Router,
              private dataService: DataService, private seoService: SeoService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;

    this.dataService.getData(this.router.url).subscribe((pageData: any) => {
      this.pageData = pageData;
      this.seoService.setMetaElement('metaDescription', this.pageData.data.metaDescription);
      this.seoService.setMetaElement('metaKeywords', this.pageData.data.metaKeywords);
      this.seoService.setTitle(this.pageData.data.title);



    });

  }
}
