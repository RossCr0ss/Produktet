import {Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {RouteService} from '../../../shared/services/route.service';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Menu} from '../../../shared/models/menu.model';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-m-box-menu',
  templateUrl: './m-box-menu.component.html',
  styleUrls: ['./m-box-menu.component.css']
})
export class BasicMenuComponent implements OnInit, OnDestroy {
  public cancelSubscription$: Subject<void> = new Subject<void>();
  menus: Array<Menu>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private menuService: MenuService,
    private routeService: RouteService,
    private siteConfiguration: SiteConfigurationService,
    private router: Router) { }

  ngOnInit() {
    this.menuService.getMenu()
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

  ngAfterViewInit(): void {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = `../assets/js/m-box-menu.js`;
    this.document.head.appendChild(script);
  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }
}
