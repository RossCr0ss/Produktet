import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  public iconColor = '#1de9c3';
  public bgColor = '#e7e7e7';
  public headingColor = '#fff';
  public textColor = '#302c2f';
  public textBlockBg = '#fff';
  public iconSize = '35px';
  public iconColor = '#b40095';
  public borderBottom = '3px solid #b40095';

  constructor() {
  }

  ngOnInit() {

  }

}
