import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Site} from '../../../shared/models/site.model';

@Component({
  selector: 'app-m-box-layout',
  templateUrl: './m-box-layout.component.html',
  styleUrls: ['./m-box-layout.component.css']
})
export class BasicLayoutComponent implements OnInit {
  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

}
