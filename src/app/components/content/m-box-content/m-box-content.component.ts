import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Site} from '../../..//shared/models/site.model';

@Component({
  selector: 'app-m-box-content',
  templateUrl: './m-box-content.component.html',
  styleUrls: ['./m-box-content.component.css']
})

export class MBoxContentComponent implements OnInit {

  componentPath: string;
  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService,) {}

  ngOnInit() {
    this.componentPath = window.location.pathname;
    this.configuration = this.siteConfigurationService.configuration;
  }

}
