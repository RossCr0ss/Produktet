import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-basic-gallery',
  templateUrl: './basicgallery.component.html',
  styleUrls: ['./basicgallery.component.css']
})
export class BasicGalleryComponent implements OnInit, AfterViewInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};


  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {



    const script = this.document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      $( document ).ready(function() {
        $("#galleryId").append("this is appended by jquery code");
       $( "#galleryId" ).css( "border", "3px solid black" );    
      });
      `;
    this.document.head.appendChild(script);



  }



}
