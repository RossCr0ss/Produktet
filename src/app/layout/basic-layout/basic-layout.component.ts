import { Component, OnInit } from '@angular/core';
import {SiteConfigurationService} from '../../core/site-configuration.service';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent implements OnInit {

  configuration: any;

  constructor(private siteConfigurationService: SiteConfigurationService) { }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration;
  }

}
