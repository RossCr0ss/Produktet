import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-basic-gallery',
  templateUrl: './basicgallery.component.html',
  styleUrls: ['./basicgallery.component.css']
})
export class BasicGalleryComponent implements OnInit, AfterViewInit {

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
