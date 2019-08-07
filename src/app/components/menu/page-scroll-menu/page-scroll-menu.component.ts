import {Component, OnInit} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {Site} from "../../../shared/models/site.model";
import {MenuService} from "../../../shared/services/menu.service";
import {RouteService} from "../../../shared/services/route.service";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-scroll-menu',
  templateUrl: './page-scroll-menu.component.html',
  styleUrls: ['./page-scroll-menu.component.css']
})
export class PageScrollMenuComponent implements OnInit {

  menus: Array<Menu>;
  configuration: Site;

  constructor(
    private menuService: MenuService,
    private routeService: RouteService,
    private siteConfiguration: SiteConfigurationService, private router: Router) {
  }

  ngOnInit() {
    this.configuration = this.siteConfiguration.configuration;

    this.menuService.getMenu(this.siteConfiguration.configuration.pageId)
    .subscribe((menus: Array<Menu>) => {
      this.menus = menus;
      this.routeService.setPageScrollDefaultRoute(this.siteConfiguration.configuration.content.name);
      this.router.navigateByUrl('/');
    });
  }

}
