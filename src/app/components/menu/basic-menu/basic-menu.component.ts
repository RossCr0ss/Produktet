import {AfterViewInit, Component, Inject, OnInit, OnDestroy } from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {RouteService} from '../../../shared/services/route.service';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Menu} from '../../../shared/models/menu.model';
import {Router} from '@angular/router';
import {Site} from '../../../shared/models/site.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-basic-menu',
  templateUrl: './basic-menu.component.html',
  styleUrls: ['./basic-menu.component.css']
})
export class BasicMenuComponent implements OnInit, OnDestroy, AfterViewInit {

  public cancelSubscription$: Subject<void> = new Subject<void>();
  menus: Array<Menu>;
  configuration: Site;

  FontColor: string;
  BgColor: string;    

  constructor(
      @Inject(DOCUMENT) private document: any,
      private menuService: MenuService,
      private routeService: RouteService,
      private siteConfiguration: SiteConfigurationService, private router: Router) { }

  ngOnInit() {
    this.configuration = this.siteConfiguration.configuration;

    this.menuService.getMenu()
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

      this.FontColor = " blue-grey-text text-lighten-5";
      this.BgColor = " blue-grey darken-3";   
  }

  ngAfterViewInit(): void {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = `../assets/js/basic-menu.js`;
    this.document.head.appendChild(script);
  }

  ngOnDestroy(): void {
    this.cancelSubscription$.next();
  }

}
