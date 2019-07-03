import { Component, OnInit, HostListener } from '@angular/core';
import { textJson } from '../../../../assets/mockData/testData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  textJson: {};
  markup : string;

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
