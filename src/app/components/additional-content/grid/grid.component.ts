import { Component, OnInit, HostListener } from '@angular/core';
import { gridJson } from '../../../../assets/mockData/testData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  gridJson: {};
  gridMarkup : string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.gridJson = gridJson;
    this.gridMarkup = this.gridJson['markup'];
  }

  fetchJson(url) {
    this.http.get(url).subscribe(res => {
      this.gridJson = res;
    });
  }

}
