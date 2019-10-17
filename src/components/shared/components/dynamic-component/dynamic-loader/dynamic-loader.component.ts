import {
  Compiler,
  Component,
  ComponentRef,
  Injector,
  Input,
  NgModuleRef,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import modulesMapping from './modules-mapping';
import { IModule } from 'src/interfaces/additional-contenet/module';

@Component({
  selector: 'dynamic-loader',
  template: '',
})
export class DynamicLoaderComponent implements OnInit {

  @Input()
  moduleName: string;

  @Input()
  module: IModule;

  public modulesMapping = modulesMapping;

  private componentContent: IModule[] = [];

  constructor(private compiler: Compiler, private viewRef: ViewContainerRef, private injector: Injector, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.moduleName && this.module) {
      console.warn(`You should specify only one input parameter moduleName or module. 
      In case that both input params are specified dynamic loader component will always load module
       specified inside module.name input param and moduleName will be ignored.`);
    }

    if (this.module) {
      this.moduleName = this.module.name
    }

    if (!this.moduleName) {
      const moduleNameFromRoute = this.route.snapshot.data['moduleName'];
      this.componentContent = this.route.snapshot.data['content'];
      if (moduleNameFromRoute) {
        this.moduleName = moduleNameFromRoute;
      }
    }

    this.loadModule();
  }

  private loadModule() {
    import(`src/modules/${this.modulesMapping[this.moduleName]}`).then((module) => {
      this.compileAndCreateModule(module);
    }).catch(err => {
      console.error(`Module with name: "${this.moduleName}" does not exists!`);
    });
  }

  private compileAndCreateModule(module: any) {
    // https://stackoverflow.com/questions/45503497/how-to-load-dynamic-external-components-into-angular-application
    this.compiler.compileModuleAndAllComponentsAsync(module[module.moduleName()])
    .then((compiled) => {
      const moduleRef: NgModuleRef<any> = compiled.ngModuleFactory.create(this.injector);
      const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(module.entryComponent());
      const componentRef: ComponentRef<any> = this.viewRef.createComponent(componentFactory);
      componentRef.instance.additionalContent = this.componentContent;
      componentRef.instance.content = this.module
    });
  }


}
