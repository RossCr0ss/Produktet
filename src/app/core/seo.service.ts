import {Inject, Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
import {MetaTag} from '../shared/model/meta-tag.model';


@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private headElement: HTMLElement;
  private htmlElement: HTMLElement;
  private bodyElement: HTMLElement;
  private favIconElement: HTMLElement;
  private tags: MetaTag[];

  constructor(private titleService: Title, @Inject(DOCUMENT) private document: any) {
    this.headElement = <HTMLElement>document.querySelector('head');
    this.favIconElement = <HTMLElement>document.getElementById('favIcon');
    this.htmlElement = <HTMLElement>document.querySelector('html');
    this.bodyElement = <HTMLElement>document.querySelector('body');
    this.tags = new Array<MetaTag>();
  }

  public setFavIcon(icon: string): void {
    this.favIconElement.setAttribute('href', icon);
  }

  public getTitle(): string {
    return this.titleService.getTitle();
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }

  public setBeforeHead(content: string): void {
    this.htmlElement.insertBefore(this.createScript(content), this.headElement)
  }

  public setBeforeBody(content: string): void {
    this.htmlElement.insertBefore(this.createScript(content), this.bodyElement)
  }

  public setAfterBody(content: string): void {
    this.htmlElement.insertBefore(this.createScript(content), this.bodyElement.nextSibling)
  }

  public setMetaElement(name: string, content: string): void {
    this.tags.push({name: name, content: content});
    const element = this.getMetaElementByName(name) ? this.getMetaElementByName(name) : this.createMetaTagElement(name);
    element.setAttribute('content', content);
  }

  public getMetaElement(name: string): void {
    this.getMetaElementByName(name).getAttribute('content')
  }

  public removeMetaElement(name: string): void {
    this.getMetaElementByName(name).remove();
  }

  public removeAllMetaTags(): void {
    for (let tag of this.tags) {
      this.removeMetaElement(tag.name)
    }
    this.tags = [];
  }

  public setMetaTags(tags: Array<MetaTag> = []): void {
    this.removeAllMetaTags();
    for (let tag of this.tags) {
      this.setMetaElement(tag.name, tag.content)
    }
  }

  private createMetaTagElement(name: string): HTMLElement {
    let element = this.getMetaElementByName(name);
    if (element === null) {
      element = this.document.createElement('meta');
      element.setAttribute('name', name);
      this.headElement.insertBefore(element, this.headElement.firstChild);
    }
    return element;
  }

  private getMetaElementByName(name: string): HTMLElement {
    return <HTMLElement>this.document.querySelector(`meta[name=${name}]`)
  }

  private createScript(src: string): HTMLElement {
    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.text = src;
    return script
  }

}
