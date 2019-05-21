import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from './core/site-configuration.service';
import {GeneralDataDetails} from './shared/model/general-data-details.model';
import {GeneralData} from './shared/model/general-data.model';
import {DataService} from './core/data.service';
import {SeoService} from './core/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configuration: any;

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
