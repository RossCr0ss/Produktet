import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  public iconColor = '#1de9c3';
  public bgColor = '#000';
  public textSize = '16px';
  public headingColor = '#fff';
  public textColor = '#fff';
  public iconSize = '35px';
  public colCount = '3';
  public alignCenter = 'center';
  public alignLeft = 'left';

  constructor() {
  }

  ngOnInit() {

  }

}
