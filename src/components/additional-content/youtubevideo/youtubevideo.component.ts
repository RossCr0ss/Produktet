import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { youtubevideoJson } from 'src/assets/mockData/testData';

@Component({
  selector: 'app-youtubevideo',
  templateUrl: './youtubevideo.component.html',
  styleUrls: ['./youtubevideo.component.css']
})
export class YoutubevideoComponent implements OnInit {

  youtubevideoJson: {};
  markup : string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.youtubevideoJson = youtubevideoJson;
    this.markup = this.youtubevideoJson['videoUrl'];
  }

  fetchJson(url) {
    this.http.get(url).subscribe(res => {
      this.youtubevideoJson = res;
    });
  }

}
