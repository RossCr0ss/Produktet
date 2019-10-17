import { Component, Inject, OnInit, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import { IVideo } from 'src/interfaces/additional-contenet/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent;
  plyrOptions: any;
  id: string;
  content: IVideo;

  public colClass = "blue-grey";
  public isWhite = false;
  public containerClass = "container";

  @ViewChild('player', { static: false }) player: ElementRef<HTMLMediaElement>;

  constructor() {
  }

  ngOnInit() {
    this.id = Math.random().toString(36).substring(7);

    if (!this.content.showControls) {
      this.plyrOptions = {
        autoplay: this.content.isAutoplay,
        muted: this.content.isMuted,
        loop: { active: this.content.isLoop },
        controls: []
      }
    } 
    else {
      this.plyrOptions = {
        autoplay: this.content.isAutoplay,
        muted: this.content.isMuted,
        loop: { active: this.content.isLoop }
      }
    }
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
