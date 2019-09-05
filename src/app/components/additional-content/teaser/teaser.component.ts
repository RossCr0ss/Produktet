import { Component, OnInit, ViewChild } from '@angular/core';
import { Teaser } from 'src/app/shared/models/additional-contenet-model/teaser.model';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {

  public orderFirst = '0';
  public orderSecond = '1';
  content: Teaser;

  constructor() {
  }

  ngOnInit() {
    if(this.content.sortingLeftRight){
      this.orderFirst = '1';
      this.orderSecond = '0';
    }
  }

}
