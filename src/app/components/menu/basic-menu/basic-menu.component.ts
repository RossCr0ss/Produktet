import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {RouteService} from '../../../shared/services/route.service';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Menu} from '../../../shared/models/menu.model';
import {Router} from '@angular/router';
import {Site} from '../../../shared/models/site.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basic-menu',
  templateUrl: './basic-menu.component.html',
  styleUrls: ['./basic-menu.component.css']
})
export class BasicMenuComponent implements OnInit, OnDestroy {
  public cancelSubscription$: Subject<void> = new Subject<void>();
  menus: Array<Menu>;
  configuration: Site;

  constructor(
      private menuService: MenuService,
      private routeService: RouteService,
      private siteConfiguration: SiteConfigurationService, private router: Router) { }

  ngOnInit() {
    this.configuration = this.siteConfiguration.configuration;

    this.menuService.getMenu(this.siteConfiguration.configuration.pageId)
      .pipe(takeUntil(this.cancelSubscription$))
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
      });
  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }

}
