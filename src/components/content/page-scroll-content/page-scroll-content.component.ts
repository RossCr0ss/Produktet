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
  templateUrl: './page-scroll-content.component.html',
  styleUrls: ['./page-scroll-content.component.scss']
})
export class PageScrollContentComponent implements OnInit, AfterViewInit, OnDestroy {
  menus: Menu[];
  mp4Src: string;
  oggSrc: string;
  contentLoaded = false;

  unsubscribe$ = new Subject();
  configuration: ISite;

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

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.contentService.contentLoaded()
    }, 100)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
