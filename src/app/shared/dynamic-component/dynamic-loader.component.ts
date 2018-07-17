import {Compiler, Component, Injector, Input, NgModuleRef, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'dynamic-loader',
  template: '',
})
export class DynamicLoaderComponent implements OnInit {

  @Input()
  moduleName: string;

  constructor(private compiler: Compiler, private viewRef: ViewContainerRef, private injector: Injector) {
  }

  ngOnInit(): void {
    switch (this.moduleName) {
      // layouts
      case 'basic-layout': {
        import('../../layout/basic-layout/basic-layout.module').then((module) => {
          this.compileAndCreateModule(module);
        });
        break;
      }

      // footers
      case 'basic-footer': {
        import('../../footer/basic-footer/basic-footer.module').then((module) => {
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
