import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {MenuService} from "../../../shared/services/menu.service";
import {DOCUMENT} from "@angular/common";
import {ContentService} from "../../../shared/services/content.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-scroll-content',
  templateUrl: './page-scroll-content.component.html',
  styleUrls: ['./page-scroll-content.component.css']
})
export class PageScrollContentComponent implements OnInit, AfterViewInit {
  menus: Menu[];
  mp4Src: string;
  oggSrc: string;

  constructor(@Inject(DOCUMENT) private document: any, private menuService: MenuService,
              private contentService: ContentService, private router: Router) {
  }

  ngOnInit() {

    this.mp4Src = "/assets/graphics/dynamikfabrikken/dynamikfabrikken.mp4";
    this.oggSrc = "/assets/graphics/dynamikfabrikken/dynamikfabrikken.ogg";

    this.menuService.getMenu()
    .subscribe((menus: Array<Menu>) => {
      this.menus = menus;
    });
  }

  ngAfterViewInit(): void {

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = `../assets/js/dynamikfabrikken_elevator.js`;
    this.document.head.appendChild(script);

    setTimeout(() => {
      this.contentService.contentLoaded()
    }, 100)
  }
}
