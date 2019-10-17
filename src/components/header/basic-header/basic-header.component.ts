import {Component, OnInit} from '@angular/core';
import { ISite } from 'src/interfaces/site';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.scss']
})
export class BasicHeaderComponent implements OnInit {

  configuration: ISite;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

}
