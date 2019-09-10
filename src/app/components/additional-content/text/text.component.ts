import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {
  public bgColClass  = "";
  public fontColClass = " blue-grey-text text-darken-2";
  
  public containerClass = " container";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  
}
