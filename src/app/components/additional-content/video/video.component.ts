import { Component, Inject, OnInit, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from "@angular/common";
import { PlyrComponent } from 'ngx-plyr';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @ViewChild(PlyrComponent, { static: false }) plyr: PlyrComponent;
  plyrOptions: any;

  id: string;

  imgPoster: string;
  content: any;

  @ViewChild('player', { static: false }) player: ElementRef<HTMLMediaElement>;

  constructor(
    @Inject('BACKEND_API_URL') private backendApiUrl: string,
    @Inject(DOCUMENT) private document: any,
    private http: HttpClient) {
  }


  ngOnInit() {
    this.id = Math.random().toString(36).substring(7);

    this.http.get(`${this.backendApiUrl}menus`).subscribe((_: any[]) => {
      _.forEach(element => {
        let content = [];
        if (element) {
          content = element.content as Array<any>;
        }
        if (content) {
          content.forEach(item => {
            if (item.name === 'video') {
              this.content = item;
              if (!this.content.showControls) {
                this.plyrOptions = {
                  autoplay: this.content.isAutoplay,
                  muted: this.content.isMuted,
                  loop: { active: this.content.isLoop },
                  controls: []
                }
              } else {
                this.plyrOptions = {
                  autoplay: this.content.isAutoplay,
                  muted: this.content.isMuted,
                  loop: { active: this.content.isLoop }
                }
              }

            }
          })
        }
      });
    })
  }

}
