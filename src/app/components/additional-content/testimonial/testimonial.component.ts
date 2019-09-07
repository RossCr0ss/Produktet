import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  public iconColor = '#1de9c3';
  public bgColor = 'transparent';
  public textSize = '16px';
  public headingColor = '#fff';
  public textColor = '#302c2f';
  public textBlockBg= '#fff';
  public iconSize = '35px';
  public colCount = '3';
  public alignCenter = 'center';
  public alignLeft = 'left';
  public borderBottom = '3px solid #881a7a';

  constructor() {
  }

  ngOnInit() {

  }

}
