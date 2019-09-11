import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Menu} from '../models/menu.model';
import {ErrorLayoutComponent} from '../components/error-layout/error-layout.component';
import {DynamicLoaderComponent} from '../components/dynamic-component/dynamic-loader.component';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {
  }

  setRoutes(menus: Array<Menu>, contentModuleName: string): void {
    menus.forEach((firstLevelMenu: Menu) => {
      this.router.config.push({
        path: firstLevelMenu.path, component: DynamicLoaderComponent,
        data: {moduleName: contentModuleName, content: firstLevelMenu.content, animation: firstLevelMenu.path}
      });
      if (firstLevelMenu.subMenu) {
        firstLevelMenu.subMenu.forEach((secondLevelMenu: Menu) => {
          this.router.config.push({
            path: `${firstLevelMenu.path}/${secondLevelMenu.path}`, component: DynamicLoaderComponent,
            data: {moduleName: contentModuleName, content: secondLevelMenu.content, animation: secondLevelMenu.path}
          });
          if (secondLevelMenu.subMenu) {
            secondLevelMenu.subMenu.forEach((thirdLevelMenu: Menu) => {
              this.router.config.push({
                path: `${firstLevelMenu.path}/${secondLevelMenu.path}/${thirdLevelMenu.path}`,
                component: DynamicLoaderComponent,
                data: {moduleName: contentModuleName, content: thirdLevelMenu.content, animation: thirdLevelMenu.path}
              });
            });
          }
        });
      }
    });
    this.router.config.push({path: '**', component: ErrorLayoutComponent});
  }

  setPageScrollDefaultRoute(contentModuleName: string): void {
    this.router.config.push({
      path: '', component: DynamicLoaderComponent,
      data: {moduleName: contentModuleName}
    })
  }
}
