import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  // From here we will be able to set some simple values from API
  // The colClass - (Site "base color")
  // revertCol - Will it be white background or the "base color" as background
  // Setting If there will be container

  public colClass = "blue-grey"; // "base colors" class from materilize css
  public revertCol = false;

  public bgColClass  = " " + this.colClass + " darken-1";
  public fontColClass = " " + this.colClass + "-text text-lighten-5";
  public iconBorderColClass = this.fontColClass;

  public containerClass = " container"; // or ""
  public borderBottom = '3px solid'; // Will NOT be dynamic for now
  public iconSize = '35px'; // Will not be dynamic for now

  public orderSecond = '0'; // 1 or 0

  constructor() {
  }

  ngOnInit() {

    if(this.revertCol){
      this.bgColClass  = "";
      this.fontColClass = " " + this.colClass + "-text";
      this.iconBorderColClass = " " + this.colClass + "-text text-darken-3";
    }

  }

}
