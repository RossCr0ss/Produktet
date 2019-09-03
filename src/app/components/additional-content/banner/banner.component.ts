import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import { Banner } from 'src/app/shared/models/additional-contenet-model/banner.model';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  content: Banner;  
  public plyrOptions: any;
  public bgHexColor = '#00ff00';


  public FontColor = " blue-grey-text text-lighten-5";
  public BgColor = " blue-grey darken-3";

  // public bannerPaddingRight = '100px';
  public bannerPaddingRight = '10%';
  // public bannerPaddingLeft = '100px';
  public bannerPaddingLeft = '10%';
  public isSmallOverlay = false;


  // Mangler
  // posterimage for video start
  // background color
  // DisplayOverlay
  // Full Overlay

  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent;

  constructor() {
    this.plyrOptions = {
      muted: true,
      autoplay: true,
      clickToPlay: false,
      loop: { active: true },
      controls: [],
      volume: 0,
      fullscreen: { enabled: false }
    }
  }

  ngOnInit() {
  }

}
