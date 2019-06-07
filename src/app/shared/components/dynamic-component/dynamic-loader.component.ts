import {Compiler, Component, Injector, Input, NgModuleRef, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dynamic-loader',
  template: '',
})
export class DynamicLoaderComponent implements OnInit {

  @Input()
  moduleName: string;

  constructor(private compiler: Compiler, private viewRef: ViewContainerRef, private injector: Injector, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const moduleNameFromRoute = this.route.snapshot.data['moduleName'];

    if (moduleNameFromRoute) {
      this.moduleName = moduleNameFromRoute;
    }
    this.loadModule();
  }

  private loadModule() {
    switch (this.moduleName) {
      // layouts
      case 'basic-layout': {
        import('../../../components/layout/basic-layout/basic-layout.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      case 'basic-layout-sidemenu': {
        import('../../../components/layout/basic-layout-sidemenu/basic-layout-sidemenu.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      case 'm-box-layout': {
        import('../../../components/layout/m-box-layout/m-box-layout.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      // content
      case 'basic-content': {
        import('../../../components/content/basic-content/basic-content.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      // header
      case 'basic-header': {
        import('../../../components/header/basic-header/basic-header.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      // menu
      case 'basic-menu': {
        import('../../../components/menu/basic-menu/basic-menu.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      case 'm-box-menu': {
        import('../../../components/menu/m-box-menu/m-box-menu.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      // footers
      case 'basic-footer': {
        import('../../../components/footer/basic-footer/basic-footer.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      // additional content
      case 'banner': {
        import('../../../components/additional-content/banner/banner.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      case 'basic-gallery': {
        import('../../../components/additional-content/basic-gallery/basic-gallery.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      default: {
        console.error(`Module with name: "${this.moduleName}" does not exists!`)
      }
    }
  }

  private compileAndCreateModule(module: any) {
    // https://stackoverflow.com/questions/45503497/how-to-load-dynamic-external-components-into-angular-application

    this.compiler.compileModuleAndAllComponentsAsync(module[module.moduleName()])
      .then((compiled) => {
        const moduleRef: NgModuleRef<any> = compiled.ngModuleFactory.create(this.injector);
        const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(module.entryComponent());
        this.viewRef.createComponent(componentFactory);
      });
  }
}
