import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  
}
