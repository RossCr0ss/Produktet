import {Component, OnInit} from '@angular/core';
import {Linklist} from '../../../shared/models/general-data.model';
import { ISite } from 'src/interfaces/site';
import { SiteConfigurationService } from 'src/services/site-configuration.service';

@Component({
  selector: 'app-basic-footer',
  templateUrl: './basic-footer.component.html',
  styleUrls: ['./basic-footer.component.scss']
})
export class BasicFooterComponent implements OnInit {

  configuration: ISite;

  CompanyDescription: string;
  CompanyName: string;
  CompanyAddress: string;
  CompanyAddress2: string;
  CompanyPhone: string;
  CompanyEmail: string;
  CompanyFacebook: string;
  CompanyLinkedin: string;
  CompanyInstagram: string;
  CompanyTwitter: string;

  BgColor: string;
  FontColor: string;

  FooterLinks: Linklist;

  constructor(private siteConfigurationService: SiteConfigurationService) {
  }

  ngOnInit(): void {
    this.configuration = this.siteConfigurationService.configuration.mainComponents;

    const generalData = this.siteConfigurationService.configuration.generalData;

    this.CompanyDescription = generalData.CompanyDescription;
    this.CompanyName = generalData.CompanyName;
    this.CompanyFacebook = generalData.CompanyFacebook;
    this.CompanyAddress = generalData.CompanyAddress;
    this.CompanyAddress2 = generalData.CompanyAddress2;
    this.CompanyPhone = generalData.CompanyPhone;
    this.CompanyEmail = generalData.CompanyEmail;
    this.CompanyFacebook = generalData.CompanyFacebook;
    this.CompanyLinkedin = generalData.CompanyLinkedin;
    this.CompanyInstagram = generalData.CompanyInstagram;
    this.CompanyTwitter = generalData.CompanyTwitter;
    this.FooterLinks = generalData.FooterLinks;
    this.FontColor = " blue-grey-text text-lighten-5";
    this.BgColor = " blue-grey darken-3";
  }
}



