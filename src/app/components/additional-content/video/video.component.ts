import { Component, Inject, OnInit, HostListener, Input } from '@angular/core';
import { videoJson } from '../../../../assets/mockData/testData';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  // To use: <app-video [isAutoplay]="true/false"...></app-video>
  @Input() isAutoplay: boolean;
  @Input() isLoop: boolean;
  @Input() isMuted: boolean;
  @Input() showControls: boolean;

  videoJson: {};
  id: string;

  imgPoster: string;
  mp4Url: string;
  oggUrl: string;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private http: HttpClient) {
  }



  ngOnInit() {
    this.id = Math.random().toString(36).substring(7);
    this.videoJson = videoJson;
    this.imgPoster = this.videoJson['posterimg'];
    this.mp4Url = this.videoJson['mp4Url'];
    this.oggUrl = this.videoJson['oggUrl'];
  }

  ngAfterViewInit(): void {

    const scriptvar = this.document.createElement('script');
    scriptvar.type = 'text/javascript';
    scriptvar.text = `
    var videoid = "` + this.id + `";
    `;
    this.document.head.appendChild(scriptvar);

    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.src = `../assets/js/video.js`;
    this.document.head.appendChild(script);
  }

  fetchJson(url) {
    this.http.get(url).subscribe(res => {
      this.videoJson = res;
    });
  }

}
