import {Component, OnInit} from '@angular/core';
import { ISite } from 'src/interfaces/site';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

@Component({
  selector: 'app-m-box-content',
  templateUrl: './m-box-content.component.html',
  styleUrls: ['./m-box-content.component.scss']
})

export class MBoxContentComponent implements OnInit {

  componentPath: string;
  configuration: ISite;

  constructor(private siteConfigurationService: SiteConfigurationService,) {}

  ngOnInit() {
    this.componentPath = window.location.pathname;
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

}
