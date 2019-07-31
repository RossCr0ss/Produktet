import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NguCarouselConfig} from '@ngu/carousel';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {

  BgColor: string;
  FontColor: string;

  images = [
    'https://images.unsplash.com/photo-1530878955558-a6c31b9c97db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1503696967350-ad1874122058?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    'https://images.unsplash.com/photo-1532951163096-1817afa77fdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80',
    'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  ];

  carouselConfig: NguCarouselConfig = {
    grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
    load: 3,
    interval: {timing: 10000000000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.BgColor = 'red';
  }

  ngOnInit() {
    this.FontColor = ' blue-grey-text text-lighten-5';
    this.BgColor = ' blue-grey darken-3';
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
