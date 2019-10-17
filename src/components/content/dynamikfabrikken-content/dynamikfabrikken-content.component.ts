import {AfterViewInit, Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import {Menu} from "../../../shared/models/menu.model";
import {DOCUMENT} from "@angular/common";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";
import { ISite } from 'src/interfaces/site';
import { ContentService } from 'src/services/content.service';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

@Component({
  selector: 'app-page-scroll-content',
  templateUrl: './dynamikfabrikken-content.component.html',
  styleUrls: ['./dynamikfabrikken-content.component.css']
})
export class PageScrollContentComponent implements OnInit, AfterViewInit, OnDestroy {
  menus: Menu[];
  mp4Src: string;
  oggSrc: string;
  contentLoaded = false;

  unsubscribe$ = new Subject();

  pathOnScrolling = ''
  locationHashWhenScrolling = ''
  configuration: ISite;

  @HostListener('window:scroll', ['$event'])
  handleWindowScroll($event) {
    if (this.pathOnScrolling !== this.locationHashWhenScrolling) {
      this.locationHashWhenScrolling = this.pathOnScrolling
      this.router.navigate(['/'],
        {fragment: this.locationHashWhenScrolling});
    }
  }

  constructor(@Inject(DOCUMENT) private document: any, private contentService: ContentService,
              private router: Router, private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit() {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;


    this.mp4Src = "/assets/graphics/dynamikfabrikken/dynamikfabrikken.mp4";
    this.oggSrc = "/assets/graphics/dynamikfabrikken/dynamikfabrikken.ogg";

    this.menus = this.siteConfigurationService.configuration.menus;

    this.contentService.afterContentLoaded()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => {
      this.contentLoaded = true;
    })
  }

  changeUrl(path) {
    this.pathOnScrolling = path;
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

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
