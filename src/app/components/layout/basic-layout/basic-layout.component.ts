import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Router, RouterOutlet} from '@angular/router';
import {Site} from '../../../shared/models/site.model';
import {slideAnimation} from "./basic-animation";

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.css'],
  animations: [
    slideAnimation
  ]
})
export class BasicLayoutComponent implements OnInit {

  configuration: Site;

  constructor(private siteConfigurationService: SiteConfigurationService, private router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;

  }
}
