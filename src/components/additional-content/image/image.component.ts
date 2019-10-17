import { Component, OnInit, HostListener } from '@angular/core';
//import { imageJson } from '../../../../assets/mockData/testData';
import { HttpClient } from '@angular/common/http';
import { IImage } from 'src/interfaces/additional-contenet/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  defaultImage: string;
  //image: string;
  //alt: string;
  imageSize: {};
  currentScreenSize: string; // Desktop, Tablet, Mobile
  //imageJson: {};
  src: string;
  alt: string;
  content: IImage

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    //this.imageJson = imageJson;
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


    this.defaultImage = "../../../../assets/dummyimages/spaceship-gif---straight.gif"; // this.imageJson['defaultImage'];
    this.assignScreenState(window.innerWidth, window.innerHeight);
    this.appendScreenSize();
    //this.alt = this.imageJson['alt'];
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.assignScreenState(window.innerWidth, window.innerHeight);
  }

  assignScreenState(width, height) {
    if (width < 768 && this.currentScreenSize !== 'mobile') {
      // Mobile
      this.currentScreenSize = 'mobile';
    }
    if (width >= 768 && this.currentScreenSize !== 'tablet') {
      // Tablet
      this.currentScreenSize = 'tablet';
    }
    if (width >= 992 && this.currentScreenSize !== 'tablet') {
      // Small Laptop
      this.currentScreenSize = 'tablet';
    }
    if (width >= 1200 && this.currentScreenSize !== 'desktop') {
      // laptops and desktops
      this.currentScreenSize = 'desktop';
    }
  }

  appendScreenSize() {
    // this.defaultImage = `${imageJson.defaultImage}?width=${this.imageSize[this.currentScreenSize].width}
    // &height=${this.imageSize[this.currentScreenSize].height}`;
    //this.image = `${this.imageJson['imageURL']}?width=${this.imageSize[this.currentScreenSize].width}&height=${this.imageSize[this.currentScreenSize].height}`;
  }
  /*
  fetchJson(url) {

    this.http.get(url).subscribe(res => {
      this.imageJson = res;
    });

  }*/
}
