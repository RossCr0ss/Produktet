import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigurationService {

  siteConfiguration: any;

  constructor(private http: HttpClient, @Inject('BACKEND_API_URL') private backendApiUrl: string) {
  }

  getConfiguration(): Promise<any> {
    return new Promise(((resolve) => {
      this.http.get(`${this.backendApiUrl}${window.location.hostname}`)
        .toPromise()
        .then(res => {
          this.siteConfiguration = res;
          resolve();
        })
        .catch(() => {
          console.log('Error while trying to get app configuration');
        });
    }));
  }

  get configuration(): any {
    return this.siteConfiguration;
  }
}
