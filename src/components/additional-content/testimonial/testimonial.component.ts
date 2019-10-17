import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  public colClass = "blue-grey"; // "base colors" class from materilize css
  public isWhite = false;

  public orderSecond = '0'; // 1 or 0

  public borderBottom = '3px solid'; // Will NOT be dynamic for nowy
  public iconSize = '35px'; // Will not be dynamic for now


  constructor() {
  }

  ngOnInit() {

  }

  public cccBg(basecol:string, isWhite: Boolean){
    if(isWhite){
      return "";
    }
    else{
      return " " + basecol + " darken-1";
    }
  }
  public cccText(basecol:string, isWhite: Boolean){
    if(isWhite){
      return " " + basecol + "-text text-darken-2"
    }
    else{
      return " " + basecol + "-text text-lighten-5";
    }
  }
  public cccBtn(basecol:string, isWhite: Boolean){
    if(isWhite){
      return " " + basecol + " lighten-1";
    }
    else {
      return " " + basecol + " darken-3";
    }
  }

  public cccIcon(basecol:string, isWhite: Boolean){
    if(isWhite){
      return " " + basecol + "-text text-darken-2"
    }
    else {
      return " " + basecol + "-text text-darken-3";
    }
  }
}
