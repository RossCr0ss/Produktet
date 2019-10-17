import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

import {slideAnimation} from "./basic-animation";
import { ISite } from 'src/interfaces/site';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css'],
  animations: [
    slideAnimation
  ]
})
export class BasicLayoutComponent implements OnInit {

  configuration: ISite;

  constructor(private siteConfigurationService: SiteConfigurationService, private router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;

  }
}
