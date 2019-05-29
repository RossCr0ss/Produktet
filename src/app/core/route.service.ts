import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Menu} from '../shared/model/menu.model';
import {ErrorLayoutComponent} from '../shared/error-layout/error-layout.component';
import {DynamicLoaderComponent} from '../shared/dynamic-component/dynamic-loader.component';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) {
  }

  setRoutes(menus: Array<Menu>, contentModuleName: string): void {
    menus.forEach((firstLevelMenu: Menu) => {
      this.router.config.push({path: firstLevelMenu.path, component: DynamicLoaderComponent,
        data: {moduleName: contentModuleName}});
      firstLevelMenu.subMenu.forEach((secondLevelMenu: Menu) => {
        this.router.config.push({path: `${firstLevelMenu.path}/${secondLevelMenu.path}`, component: DynamicLoaderComponent,
          data: {moduleName: contentModuleName}});
        secondLevelMenu.subMenu.forEach((thirdLevelMenu: Menu) => {
          this.router.config.push({path: `${firstLevelMenu.path}/${secondLevelMenu.path}/${thirdLevelMenu.path}`,
            component: DynamicLoaderComponent, data: {moduleName: contentModuleName}});
        });
      });
    });
    this.router.config.push({path: '**', component: ErrorLayoutComponent});
  }
}