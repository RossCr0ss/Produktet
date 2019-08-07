import {Component, OnInit} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {MenuService} from "../../../shared/services/menu.service";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";

@Component({
  selector: 'app-page-scroll-content',
  templateUrl: './page-scroll-content.component.html',
  styleUrls: ['./page-scroll-content.component.css']
})
export class PageScrollContentComponent implements OnInit {
  menus: Menu[];

  constructor(private siteConfiguration: SiteConfigurationService, private menuService: MenuService) {
  }

  ngOnInit() {

    this.menuService.getMenu(this.siteConfiguration.configuration.pageId)
    .subscribe((menus: Array<Menu>) => {
      this.menus = menus;
    });
  }

}
