import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Site} from '../models/site.model';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigurationService {

  siteConfiguration: Site;

  constructor(private http: HttpClient, @Inject('BACKEND_API_URL') private backendApiUrl: string) {
  }

  getConfiguration(): Promise<any> {
    return new Promise(((resolve) => {
      this.http.get(`${this.backendApiUrl}${window.location.hostname}`)
        .toPromise()
        .then(res => {
          this.siteConfiguration = res as Site;
          resolve();
        })
        .catch(() => {
          console.log('Error while trying to get app configuration');
        });
    }));
  }

  get configuration(): Site {
    return this.siteConfiguration;
  }
}
