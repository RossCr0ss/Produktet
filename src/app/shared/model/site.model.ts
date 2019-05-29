import {SiteComponent} from "./site-component.model";

export interface Site {
  pageId: number;
  layout: SiteComponent;
  menu: SiteComponent;
  header: SiteComponent;
  footer: SiteComponent;
  content: SiteComponent;
  scripts: string[];
  styles: string[];
}
