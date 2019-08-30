import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Site} from '../../..//shared/models/site.model';


@Component({
  selector: 'app-basic-content',
  templateUrl: './basic-content.component.html',
  styleUrls: ['./basic-content.component.css']
})
export class BasicContentComponent implements OnInit {

  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

}
