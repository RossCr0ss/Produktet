import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Router} from '@angular/router';
import {Site} from '../../../shared/models/site.model';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css']
})
export class BasicLayoutComponent implements OnInit {

  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService, private router: Router) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;

  }
}
