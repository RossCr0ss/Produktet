import { ISiteComponent } from './site-component';

export interface ISite {
  pageId: number;
  layout: ISiteComponent;
  menu: ISiteComponent;
  header: ISiteComponent;
  footer: ISiteComponent;
  content: ISiteComponent;
  scripts: string[];
  styles: string[];
}
