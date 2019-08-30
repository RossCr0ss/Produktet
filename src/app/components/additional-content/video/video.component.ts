import { Component, Inject, OnInit, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import {Video} from "../../../shared/models/additional-contenet-model/video.model";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent;
  plyrOptions: any;
  id: string;
  content: Video;

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

}
