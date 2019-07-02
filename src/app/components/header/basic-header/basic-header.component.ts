import {Component, OnInit} from '@angular/core';
import {Site} from "../../../shared/models/site.model";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css']
})
export class BasicHeaderComponent implements OnInit {

  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;
    console.log(this.configuration.content.content);
  }

}
