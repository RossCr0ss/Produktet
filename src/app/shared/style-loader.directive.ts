import {Directive, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: 'styleLoader'
})
export class StyleLoaderDirective implements OnInit {

  @Input() url;
  @Input() css;

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    if (this.url) {
      this.loadStyle();
    }
    if (this.css) {
      this.appendStyle();
    }
  }

  private loadStyle() {
    const linkElement = this.document.createElement('link');
    linkElement.href = this.url;
    linkElement.rel = 'stylesheet';
    linkElement.async = true;
    linkElement.charset = 'utf-8';
    this.document.head.appendChild(linkElement);
  }

  private appendStyle() {
    const styleElement = this.document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = this.css;
    this.document.getElementsByTagName('head')[0].appendChild(styleElement);
  }

}
