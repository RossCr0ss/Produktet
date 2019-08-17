import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef,
  OnInit, ViewChild
} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {MenuService} from "../../../shared/services/menu.service";
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {ContentService} from "../../../shared/services/content.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-scroll-content',
  templateUrl: './page-scroll-content.component.html',
  styleUrls: ['./page-scroll-content.component.css']
})
export class PageScrollContentComponent implements OnInit, AfterViewInit {
  menus: Menu[];

  constructor(private siteConfiguration: SiteConfigurationService, private menuService: MenuService,
              private contentService: ContentService, private router: Router) {
  }

  ngOnInit() {

    this.menuService.getMenu(this.siteConfiguration.configuration.pageId)
    .subscribe((menus: Array<Menu>) => {
      this.menus = menus;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contentService.contentLoaded()
    }, 100)
  }
}
