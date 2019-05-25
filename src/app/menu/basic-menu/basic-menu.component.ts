import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../core/menu.service';
import {RouteService} from '../../core/route.service';
import {SiteConfigurationService} from '../../core/site-configuration.service';
import {Menu} from '../../shared/model/menu.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basic-menu',
  templateUrl: './basic-menu.component.html',
  styleUrls: ['./basic-menu.component.css']
})
export class BasicMenuComponent implements OnInit {

  menus: Array<Menu>;

  constructor(private menuService: MenuService, private routeService: RouteService, private siteConfiguration: SiteConfigurationService, private router: Router) { }

  ngOnInit() {
    this.menuService.getMenu(this.siteConfiguration.configuration.pageId)
      .subscribe((menus: Array<Menu>) => {
        this.menus = menus;
        this.routeService.setRoutes(menus, this.siteConfiguration.configuration.content.name);
        if (this.menus) {
          if (window.location.pathname === '/') {
            // Assume that first element is home page
            this.router.navigateByUrl(this.menus[0].path)
          } else {
            this.router.navigateByUrl(window.location.pathname)
          }
        }
      })
  }

}
