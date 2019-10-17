import {Component, OnInit} from '@angular/core';
import { SiteConfigurationService } from '../../../../../../produktet/src/app/shared/services/site-configuration.service';
import { ISite } from 'src/interfaces/site';


@Component({
  selector: 'app-basic-content',
  templateUrl: './basic-content.component.html',
  styleUrls: ['./basic-content.component.css']
})
export class BasicContentComponent implements OnInit {

  configuration: ISite;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;
  }

  trackByFn(index, item) {
    return item.key
  }
}
