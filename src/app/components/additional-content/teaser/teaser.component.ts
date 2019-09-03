import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {
  public orderFirst = '0';
  public orderSecond = '1';
  public imgSrc = '../../assets/graphics/dynamikfabrikken/dynamikfabrikken.jpg';

  constructor() {
  }

  ngOnInit() {

  }

}
