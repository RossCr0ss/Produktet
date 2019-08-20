import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Menu} from "../../../shared/models/menu.model";
import {Site} from "../../../shared/models/site.model";
import {MenuService} from "../../../shared/services/menu.service";
import {RouteService} from "../../../shared/services/route.service";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {Router} from "@angular/router";
import {ContentService} from "../../../shared/services/content.service";
import {filter, map, takeUntil} from "rxjs/operators";
import {PageScrollService} from "ngx-page-scroll-core";
import {Subject} from "rxjs";

@Component({
  selector: 'app-page-scroll-menu',
  templateUrl: './page-scroll-menu.component.html',
  styleUrls: ['./page-scroll-menu.component.css']
})
export class PageScrollMenuComponent implements OnInit, OnDestroy {

  // small changes

  menus: Array<Menu>;
  configuration: Site;
  unsubscribe$ = new Subject()

  constructor(
    @Inject(DOCUMENT) private document: any,
    private menuService: MenuService,
    private routeService: RouteService,
    private siteConfiguration: SiteConfigurationService, private router: Router,
    private contentService: ContentService, private pageScrollService: PageScrollService) {
  }

  ngOnInit() {
    let locationHash = location.hash
    this.configuration = this.siteConfiguration.configuration;

    this.menuService.getMenu()
    .subscribe((menus: Array<Menu>) => {
      this.menus = menus;
      this.routeService.setPageScrollDefaultRoute(this.siteConfiguration.configuration.content.name);
      this.router.navigateByUrl('/')

      this.contentService.afterContentLoaded()
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(value => value),
        map(() => {
          return locationHash || `#${this.menus[0].path}`
        }))
      .subscribe((location: string) => {
        this.router.navigate(['/'], {fragment: location.replace("#", "")});
        // this.pageScrollService.scroll({
        //   document: this.document,
        //   scrollTarget: location,
        // })
      })
    });

    window.onhashchange = () => {
      // this.pageScrollService.scroll({
      //   document: this.document,
      //   scrollTarget: window.location.hash,
      // })
    }

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
    
    setTimeout(function(){ 

      let menu = document.querySelector('.sidebar-nav'),
      menuButton = document.querySelector('.js-hamb'),
      overlay = document.querySelector('.js-overlay'),
      elevator = document.querySelector('.js-elevator');
      
      let MenuUI = {
      
      initialize() {
          this.addListener();
      },
      
      addListener() {
          menuButton.addEventListener('click', this._listeners.menuSideToggle, false); // burger action
          
      },
      
      _listeners: {
          
          menuSideToggle() {
              
              if (!menu.classList.contains('active')) {
                  
                  //show menu
                  MenuUI.action.menuSideOn();
                  
              } else {
                  
                  //hide menu
                  MenuUI.action.menuSideOff();
              }
          }
      },
      
      action: {
          
          menuSideOn() {
              // show menu action
              menu.classList.add('active');
              menuButton.classList.add('active');
              overlay.classList.add('active'); // show overlay
              document.body.classList.add('blocked'); // prevent scroll of body
              elevator.classList.add('active', 'visible');
              
          },
          
          menuSideOff() {
              // hide menu action
              menuButton.classList.remove('active');
              menu.classList.remove('active');
              elevator.classList.remove('active');
              setTimeout(() => {
                  overlay.classList.remove('active'); // hide overlay
                  elevator.classList.remove('visible');
                  document.body.classList.remove('blocked'); // prevent scroll of body
              }, 500)
          }
      }
      };
      
      MenuUI.initialize();
   }, 200);

    `;
    this.document.head.appendChild(script);

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
