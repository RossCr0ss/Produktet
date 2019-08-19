import {Component, OnInit, Inject} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {MenuService} from "../../../shared/services/menu.service";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-page-scroll-content',
  templateUrl: './page-scroll-content.component.html',
  styleUrls: ['./page-scroll-content.component.css']
})
export class PageScrollContentComponent implements OnInit {
  menus: Menu[];
  
  constructor(@Inject(DOCUMENT) private document: any, private siteConfiguration: SiteConfigurationService, private menuService: MenuService) {
  }

  ngOnInit() {

    this.menuService.getMenu(this.siteConfiguration.configuration.pageId)
    .subscribe((menus: Array<Menu>) => {
      this.menus = menus;
    });
  }

  ngAfterViewInit(): void {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = `../assets/js/dynamikfabrikken_elevator.js`;
    this.document.head.appendChild(script);
  }


}
