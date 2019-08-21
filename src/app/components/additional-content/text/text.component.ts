import { Component, OnInit, HostListener } from '@angular/core';
import { textJson } from '../../../../assets/mockData/testData';
import { HttpClient } from '@angular/common/http';
import {ComponentContent} from "../../../shared/models/component-content.model";

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  additionalContent: ComponentContent[];
  textJson: {};
  markup : string;
  additionalMarkup: string;
  key: string;
  nodeId: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.textJson = textJson;
    this.markup = this.textJson['markup'];
  }

  fetchJson(url) {
    this.http.get(url).subscribe(res => {
      this.textJson = res;
    });
  }

}
