import {Component, OnInit, Pipe, ViewEncapsulation} from '@angular/core';
import { Teaser } from 'src/app/shared/models/additional-contenet-model/teaser.model';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})

export class TeaserComponent implements OnInit {

  content: Teaser;
  //Will be dynamix from API
  public colClass = "blue-grey";
  public isWhite = false;
  public containerClass = "";


  public orderFirst = '0';
  public orderSecond = '1';

  deleteMeLater = '<p class="deleteMeClass">This is innerText with style</p>';

  constructor() {
  }

  ngOnInit() {
    if(this.content.sortingLeftRight){
      this.orderFirst = '1';
      this.orderSecond = '0';
    }
  }

  //Please show how to make this a general function we can use on all components + is it okay approch?
  replaceButtonClass(s:string) {
    return s && s.replace('btn-large','btn-large' + this.cccBtn(this.colClass, this.isWhite)).replace('btn','btn' + this.cccBtn(this.colClass, this.isWhite)).replace('btn-small','btn-small' + this.cccBtn(this.colClass, this.isWhite));
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


