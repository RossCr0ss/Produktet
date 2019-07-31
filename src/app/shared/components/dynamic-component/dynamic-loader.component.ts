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
import {ComponentContent} from "../../models/component-content.model";

@Component({
  selector: 'dynamic-loader',
  template: '',
})
export class DynamicLoaderComponent implements OnInit {

  @Input()
  moduleName: string;

  public modulesMapping = modulesMapping;

  private componentContent: ComponentContent[] = [];

  constructor(private compiler: Compiler, private viewRef: ViewContainerRef, private injector: Injector, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
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
    import(`../../../components/${this.modulesMapping[this.moduleName]}`).then((module) => {
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
    });
  }


}
