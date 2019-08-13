import {Component, OnInit, Inject} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {Site} from "../../../shared/models/site.model";
import {MenuService} from "../../../shared/services/menu.service";
import {RouteService} from "../../../shared/services/route.service";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-page-scroll-menu',
  templateUrl: './page-scroll-menu.component.html',
  styleUrls: ['./page-scroll-menu.component.css']
})
export class PageScrollMenuComponent implements OnInit {

  menus: Array<Menu>;
  configuration: Site;

  constructor(
    @Inject(DOCUMENT) private document: any,
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

}
