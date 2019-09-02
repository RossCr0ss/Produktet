import { Component, OnInit, ViewChild } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public videoUrlMP4 = 'https://www.olavdelinde.dk/media/2049/film-til-forside-af-web_2.mp4';
  // public videoUrlMP4 = null;
  public videoUrlOGG = null;
  // public imgSrc = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';
  public imgSrc = null;
  public plyrOptions: any;
  public bgHexColor = '#00ff00';
  public overlayHexColor = '#000';
  public overlayText = '<p>Some text inside overlay!</p>'
  // public bannerPaddingRight = '100px';
  public bannerPaddingRight = '10%';
  // public bannerPaddingLeft = '100px';
  public bannerPaddingLeft = '10%';
  public isSmallOverlay = true;
  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent;

  constructor() {
    this.plyrOptions = {
      autoplay: true,
      muted: true,
      loop: { active: true },
      controls: []
    }
  }

  ngOnInit() {

  }

}
