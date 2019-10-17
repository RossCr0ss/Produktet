import {Component, OnInit} from '@angular/core';
import { SiteConfigurationService } from 'src/services/site-configuration.service';
import { ISite } from 'src/interfaces/site';

@Component({
  selector: 'app-m-box-layout',
  templateUrl: './m-box-layout.component.html',
  styleUrls: ['./m-box-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {
  configuration: ISite;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

}
