import { Component, OnInit, HostListener } from '@angular/core';
import {sampleJson} from '../../../../../imageData';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  defaultImage: String;
  image: String;
  alt: String;
  imageSize: {};
  currentScreenSize: String; // Desktop, Tablet, Mobile
  constructor() {
  }

  ngOnInit() {
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
    this.assignScreenState(window.innerWidth, window.innerHeight);

    this.defaultImage = sampleJson.defaultImage;
    this.image = sampleJson.imageURL;
    this.alt = sampleJson.alt;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.assignScreenState(window.innerWidth, window.innerHeight);
  }

  assignScreenState(width, height) {
    if (width < 768) {
      // Mobile
      this.currentScreenSize = 'mobile';
    }
    if (width >= 768) {
      // Tablet
      this.currentScreenSize = 'tablet';
    }
    if (width >= 992) {
      // Small Laptop
      this.currentScreenSize = 'tablet';
    }
    if (width >= 1200) {
      // laptops and desktops
      this.currentScreenSize = 'desktop';
    }
  }
}
