import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from './core/site-configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configuration: any;

  constructor(private siteConfigurationService: SiteConfigurationService) {}

  ngOnInit(): void {
    this.configuration = this.siteConfigurationService.configuration;
  }

}
