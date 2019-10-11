import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
// import {NguCarouselConfig, NguCarousel} from '@ngu/carousel';
// import {Slider} from 'src/app/shared/models/additional-contenet-model/slider.model';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    images: string[];
    config: SwiperOptions = {
    speed: 1500,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
        
    };

    constructor() {}

    ngOnInit() { this.images = [
    'assets/images/yellow.jpg',
    'assets/images/green.jpg',
    'assets/images/blue.jpg'
    ];}

    }
// export class SliderComponent implements AfterViewInit {

//   BgColor: string;
//   FontColor: string;

//   content: Slider;

//   withAnim = true;
//   mySlider: NguCarousel<any>;

//   carouselConfig: NguCarouselConfig = {
//     grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
//     load: 3,
//     interval: {timing: 3000, initialDelay: 1000},
//     loop: false,
//     touch: true,
//     velocity: 0.2,
//   }

//   constructor(private cdr: ChangeDetectorRef) {
//   }

//   ngOnInit() {
//     this.FontColor = ' blue-grey-text text-lighten-5';
//     this.BgColor = ' blue-grey darken-3';
//   }

//   ngAfterViewInit() {
//     this.cdr.detectChanges();
//   }

//   moveTo(slide) {
//     this.mySlider.moveTo(slide, !this.withAnim);
//   }

// }
