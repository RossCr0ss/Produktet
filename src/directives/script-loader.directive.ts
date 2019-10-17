import {Directive, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: 'scriptLoader'
})
export class ScriptLoaderDirective implements OnInit {

  @Input() url;

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.loadScript();
  }

  private loadScript() {
    const node = this.document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    this.document.head.appendChild(node);
  }

}
