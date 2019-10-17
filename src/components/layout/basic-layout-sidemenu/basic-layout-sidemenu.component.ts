import {Component, OnInit} from '@angular/core';
import { SiteConfigurationService } from 'src/services/site-configuration.service';
import { ISite } from 'src/interfaces/site';

@Component({
  selector: 'app-basic-layout-sidemenu',
  templateUrl: './basic-layout-sidemenu.component.html',
  styleUrls: ['./basic-layout-sidemenu.component.css']
})
export class BasicLayoutComponent implements OnInit {

  configuration: ISite;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }
}
