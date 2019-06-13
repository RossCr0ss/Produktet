import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {RouteService} from '../../../shared/services/route.service';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Menu} from '../../../shared/models/menu.model';
import {Router} from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-m-box-menu',
  templateUrl: './m-box-menu.component.html',
  styleUrls: ['./m-box-menu.component.css']
})
export class BasicMenuComponent implements OnInit, OnDestroy {
  public cancelSubscription$: Subject<void> = new Subject<void>();
  menus: Array<Menu>;

  constructor(
    private menuService: MenuService,
    private routeService: RouteService,
    private siteConfiguration: SiteConfigurationService,
    private router: Router) { }

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
      });
  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }
}
