import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Menu} from "../../../shared/models/menu.model";
import { ISite } from 'src/interfaces/site';
import { RouteService } from 'src/services/route.service';
import { SiteConfigurationService } from 'src/services/site-configuration.service';
import {Router} from "@angular/router";
import {filter, map, takeUntil} from "rxjs/operators";
import {PageScrollService} from "ngx-page-scroll-core";
import {Subject} from "rxjs";
import { ContentService } from 'src/services/content.service';

@Component({
  selector: 'app-page-scroll-menu',
  templateUrl: './dynamikfabrikken-menu.component.html',
  styleUrls: ['./dynamikfabrikken-menu.component.css']
})
export class PageScrollMenuComponent implements OnInit, OnDestroy {

  // small changes

  menus: Array<Menu>;
  configuration: ISite;
  unsubscribe$ = new Subject();
  elevatorSundPath: string = '../../../../assets/elevator-sound/Elevator-ding-sound-effect.mp3';
  activeMenuItem: any;
  @ViewChild('sideBarNav', {static: false}) sideBarNav: ElementRef<HTMLElement>;
  @ViewChild('menuButton', {static: false}) menuButton: ElementRef<HTMLElement>;
  @ViewChild('elevator', {static: false}) elevator: ElementRef<HTMLElement>;
  shakeElevator: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private routeService: RouteService,
    private siteConfiguration: SiteConfigurationService, private router: Router,
    private contentService: ContentService, private pageScrollService: PageScrollService) {
  }

  ngOnInit() {
    let locationHash = location.hash
    this.configuration = this.siteConfiguration.configuration.mainComponents;
      this.menus = this.siteConfiguration.configuration.menus;
      this.routeService.setPageScrollDefaultRoute(this.siteConfiguration.configuration.mainComponents.content.name);
      this.router.navigateByUrl('/')

      this.contentService.afterContentLoaded()
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(value => value),
        map(() => {
          return locationHash || `#${this.menus[0].path}`
        }))
      .subscribe((location: string) => {
        if (location !== '#/') {
          this.router.navigate(['/'],
            {fragment: location.replace("#", "")});
          this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: location,
          })
        }
        this.activeMenuItem = this.menus[0].name;
      })

    window.onhashchange = () => {
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: window.location.hash || '#/',
      })
    }

  }

  dingAction(event, menu) {
    if (menu.name !== this.activeMenuItem) {
      this.shakeElevator = false;
      this.activeMenuItem = menu.name;
      let audio = new Audio();
      audio.src = this.elevatorSundPath;
      audio.load();
      audio.play();
      setTimeout(_ => {
        window.innerWidth <= 700 ? this.menuSideToggle() : null;
      }, 300);
    }
  }

  toggleShakeElevator(menuName) {
    if (menuName !== this.activeMenuItem) {
      this.shakeElevator = true;
    } else {
      this.shakeElevator = false;
    }
  }

  menuSideOn() {
    // show menu action
    const overlay = document.querySelector('.js-overlay');
    this.sideBarNav.nativeElement.classList.add('active');
    this.menuButton.nativeElement.classList.add('active');
    overlay.classList.add('active'); // show overlay
    document.body.classList.add('blocked'); // prevent scroll of body
    this.elevator.nativeElement.classList.add('active', 'visible');
  }

  menuSideOff() {
    // hide menu action
    const overlay = document.querySelector('.js-overlay');
    this.sideBarNav.nativeElement.classList.remove('active');
    this.menuButton.nativeElement.classList.remove('active');
    this.elevator.nativeElement.classList.remove('active');
    setTimeout(() => {
      overlay.classList.remove('active'); // hide overlay
      this.elevator.nativeElement.classList.remove('visible');
      document.body.classList.remove('blocked'); // prevent scroll of body
    }, 500)
  }

  menuSideToggle() {
    if (!this.sideBarNav.nativeElement.classList.contains('active')) {
      this.menuSideOn();
    } else {
      this.menuSideOff();
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
