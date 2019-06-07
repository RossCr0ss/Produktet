import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from './shared/services/site-configuration.service';
import {GeneralDataDetails} from './shared/models/general-data-details.model';
import {GeneralData} from './shared/models/general-data.model';
import {DataService} from './shared/services/data.service';
import {SeoService} from './shared/services/seo.service';
import {Site} from './shared/models/site.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService, private dataService: DataService, private seoService: SeoService) {}

  ngOnInit(): void {
    this.configuration = this.siteConfigurationService.configuration;

    this.dataService.getGeneralData().subscribe((generalData: GeneralData) => {
      const generalDataDetails: GeneralDataDetails = generalData.data[0];

      if(generalDataDetails.ScriptHead != null){
        this.seoService.setBeforeHead(generalDataDetails.ScriptHead);
      }
      if(generalDataDetails.ScriptBodyTop != null){
        this.seoService.setBeforeBody(generalDataDetails.ScriptBodyTop);
      }
      if(generalDataDetails.ScriptBodyBottom != null){
        this.seoService.setAfterBody(generalDataDetails.ScriptBodyBottom);
      }

    });

  }

}
