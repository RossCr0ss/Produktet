import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GeneralData} from '../shared/models/general-data.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('BACKEND_API_URL') private backendApiUrl: string,
              private http: HttpClient) {
  }

  getGeneralData(): Observable<GeneralData> {
    return this.http.get(`${this.backendApiUrl}getgeneralData`)
    .pipe(map((response: any) => response as GeneralData));
  }

}
