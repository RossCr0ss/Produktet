import {Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { RouteService } from 'src/services/route.service';
import { SiteConfigurationService } from 'src/services/site-configuration.service';
import {Menu} from '../../../shared/models/menu.model';
import {Router} from '@angular/router';
import { Subject } from 'rxjs';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-m-box-menu',
  templateUrl: './m-box-menu.component.html',
  styleUrls: ['./m-box-menu.component.scss']
})
export class BasicMenuComponent implements OnInit, OnDestroy {
  public cancelSubscription$: Subject<void> = new Subject<void>();
  menus: Array<Menu>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private routeService: RouteService,
    private siteConfiguration: SiteConfigurationService,
    private router: Router) { }

  ngOnInit() {

        this.menus = this.siteConfiguration.configuration.menus;
        this.routeService.setRoutes(this.menus, this.siteConfiguration.configuration.mainComponents.content.name);
        if (this.menus) {
          if (window.location.pathname === '/') {
            // Assume that first element is home page
            this.router.navigateByUrl(this.menus[0].path)
          } else {
            this.router.navigateByUrl(window.location.pathname)
          }
        }
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
