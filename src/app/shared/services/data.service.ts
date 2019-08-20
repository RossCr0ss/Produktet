import {Inject, Injectable} from '@angular/core';
import {SiteConfigurationService} from './site-configuration.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {GeneralData} from '../models/general-data.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})export class DataService {

  constructor(
    @Inject('BACKEND_API_URL') private backendApiUrl: string,
    private http: HttpClient,
    private siteConfigurationService: SiteConfigurationService) {
  }

  getGeneralData(): Observable<GeneralData> {
    return this.http.get(`${this.backendApiUrl}getgeneralData?pageid=${this.siteConfigurationService.configuration.pageId}`)
      .pipe(map((response: any) => response as GeneralData));
  }

}
