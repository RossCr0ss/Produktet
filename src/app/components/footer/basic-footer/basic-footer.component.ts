import {Component, OnInit} from '@angular/core';
import {SiteConfigurationService} from "../../../shared/services/site-configuration.service";
import {DataService} from '../../../shared/services/data.service';
import {GeneralDataDetails} from '../../../shared/models/general-data-details.model';
import {GeneralData} from '../../../shared/models/general-data.model';
import {Site} from '../../../shared/models/site.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-basic-footer',
  templateUrl: './basic-footer.component.html',
  styleUrls: ['./basic-footer.component.css']
})
export class BasicFooterComponent implements OnInit {

  configuration: Site;
  public cancelSubscription$: Subject<void> = new Subject<void>();

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
  CompanyData : GeneralDataDetails;

  constructor(private siteConfigurationService: SiteConfigurationService,
    private dataService: DataService) {}

    ngOnInit(): void {
      this.configuration = this.siteConfigurationService.configuration;
  
      this.dataService.getGeneralData()
        .pipe(takeUntil(this.cancelSubscription$))
        .subscribe((generalData: GeneralData) => {
          this.CompanyDescription = generalData.data[0].CompanyDescription;
          this.CompanyName = generalData.data[0].CompanyName;
          this.CompanyFacebook = generalData.data[0].CompanyFacebook;
          this.CompanyAddress = generalData.data[0].CompanyAddress;
          this.CompanyAddress2 = generalData.data[0].CompanyAddress2;
          this.CompanyPhone = generalData.data[0].CompanyPhone;
          this.CompanyEmail = generalData.data[0].CompanyEmail;
          this.CompanyFacebook = generalData.data[0].CompanyFacebook;
          this.CompanyLinkedin = generalData.data[0].CompanyLinkedin;
          this.CompanyInstagram = generalData.data[0].CompanyInstagram;
          this.CompanyTwitter = generalData.data[0].CompanyTwitter;         
        });
      }

      
    
      ngOnDestroy(): void {
        this.cancelSubscription$.next();
      }
    
    }



