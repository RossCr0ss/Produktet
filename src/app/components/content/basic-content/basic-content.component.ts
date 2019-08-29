import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Site} from '../../..//shared/models/site.model';
import {ComponentContent} from "../../../shared/models/component-content.model";


@Component({
  selector: 'app-basic-content',
  templateUrl: './basic-content.component.html',
  styleUrls: ['./basic-content.component.css']
})
export class BasicContentComponent implements OnInit {

  configuration: Site;
  // Can be used to set content from the menu
  additionalContent: ComponentContent;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;


  }

}
