import { Component, OnInit, HostListener } from '@angular/core';
import { sampleJson } from '../../../../assets/mockData/imageData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  defaultImage: string;
  image: string;
  alt: string;
  imageSize: {};
  currentScreenSize: string; // Desktop, Tablet, Mobile
  sampleJson: {};
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.sampleJson = sampleJson;
    // this.fetchJson('https://jsonplaceholder.typicode.com/todos/1');
    this.imageSize = {
      mobile: {
        height: 100,
        width: 100,
      },
      tablet: {
        height: 250,
        width: 250,
      },
      desktop: {
        height: 600,
        width: 600,
      }
    };
    this.defaultImage = this.sampleJson['defaultImage'];
    this.assignScreenState(window.innerWidth, window.innerHeight);
    this.appendScreenSize();
    this.alt = this.sampleJson['alt'];
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.assignScreenState(window.innerWidth, window.innerHeight);
  }

  assignScreenState(width, height) {
    if (width < 768 && this.currentScreenSize !== 'mobile') {
      // Mobile
      this.currentScreenSize = 'mobile';
      this.appendScreenSize();
    }
    if (width >= 768 && this.currentScreenSize !== 'tablet') {
      // Tablet
      this.currentScreenSize = 'tablet';
      this.appendScreenSize();
    }
    if (width >= 992 && this.currentScreenSize !== 'tablet') {
      // Small Laptop
      this.currentScreenSize = 'tablet';
      this.appendScreenSize();
    }
    if (width >= 1200 && this.currentScreenSize !== 'desktop') {
      // laptops and desktops
      this.currentScreenSize = 'desktop';
      this.appendScreenSize();
    }

  }

  appendScreenSize() {
    // this.defaultImage = `${sampleJson.defaultImage}?width=${this.imageSize[this.currentScreenSize].width}
    // &height=${this.imageSize[this.currentScreenSize].height}`;
    this.image = `${this.sampleJson['imageURL']}?width=${this.imageSize[this.currentScreenSize].width}&height=${this.imageSize[this.currentScreenSize].height}`;

  }
  fetchJson(url) {
    this.http.get(url).subscribe(res => {
      this.sampleJson = res;
    });

  }
}
