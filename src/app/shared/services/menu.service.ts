import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menu} from '../models/menu.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(@Inject('BACKEND_API_URL') private backendApiUrl: string, private http: HttpClient) {
  }

  getMenu(pageId: number): Observable<Array<Menu>> {
    return this.http.get(`${this.backendApiUrl}menus`, {params: {pageId: pageId.toString()}})
      .pipe(map(r => r['menus'] as Array<Menu>));
  }
}
