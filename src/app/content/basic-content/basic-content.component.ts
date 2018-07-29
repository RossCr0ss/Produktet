import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-content',
  templateUrl: './basic-content.component.html',
  styleUrls: ['./basic-content.component.css']
})
export class BasicContentComponent implements OnInit {

  componentPath: string;

  constructor() { }

  ngOnInit() {
    this.componentPath = window.location.pathname
  }

}
