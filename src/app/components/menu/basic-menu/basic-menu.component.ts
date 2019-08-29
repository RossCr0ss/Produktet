import {AfterViewInit, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {RouteService} from '../../../shared/services/route.service';
import {SiteConfigurationService} from '../../../shared/services/site-configuration.service';
import {Menu} from '../../../shared/models/menu.model';
import {Router} from '@angular/router';
import {Site} from '../../../shared/models/site.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {DOCUMENT} from "@angular/common";
import {SeoService} from "../../../shared/services/seo.service";

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
    private siteConfiguration: SiteConfigurationService, private router: Router,
    private seoService: SeoService) {
  }

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
          this.setSeoValues(this.menus[0])
        } else {
          this.router.navigateByUrl(window.location.pathname)
          const menu = this.menus.find((m) =>
            m.path === window.location.pathname.substr(1)
          )

          this.setSeoValues(menu)
        }
      }
    });

    this.FontColor = " blue-grey-text text-lighten-5";
    this.BgColor = " blue-grey darken-3";
  }

  setSeoValues(menu: Menu) {
    this.seoService.setMetaElement('description', menu.metaDescription);
    this.seoService.setMetaElement('keywords', menu.metaKeywords);
    this.seoService.setMetaElement('metaImage', menu.metaImage);
    this.seoService.setTitle(menu.metaTitle);
    this.seoService.setFavIcon(menu.favicon);
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
