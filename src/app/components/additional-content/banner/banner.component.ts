import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import { Banner } from 'src/app/shared/models/additional-contenet-model/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

//  encapsulation: ViewEncapsulation.None,

export class BannerComponent implements OnInit {

  content: Banner;  
  public plyrOptions: any;
  // content.posterSrc is posterimage for the video

  public FontColor = " blue-grey-text text-lighten-5";
  public BgColor = " blue-grey darken-3";

  public bannerPaddingRight = '0';
  public bannerPaddingLeft = '0';

  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent;

  constructor() {
    this.plyrOptions = {
      poster: 'https://dummyimage.com/600x400/000/fff',
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
    console.log("Var to poster image");
    console.log(this.content.posterSrc);
  }

}
