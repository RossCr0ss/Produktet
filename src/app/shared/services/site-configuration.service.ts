import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Configuration} from "../models/configuration.model";

@Injectable({
  providedIn: 'root'
})
export class SiteConfigurationService {

  _configuration: Configuration;

  constructor(private http: HttpClient, @Inject('BACKEND_API_URL') private backendApiUrl: string,
              @Inject('DEV_HOST_NAME') private hostName: string) {
  }

  getConfiguration(): Promise<any> {
    return new Promise(((resolve) => {
      this.http.get(`${this.backendApiUrl}Api/GetSite?domain=${this.hostName || window.location.hostname}`)
      .toPromise()
      .then(res => {
        this._configuration = res as Configuration;
        resolve();
      })
      .catch(() => {
        console.log('Error while trying to get app configuration');
      });
    }));
  }

  get configuration(): Configuration {
    return this._configuration;
  }
}
