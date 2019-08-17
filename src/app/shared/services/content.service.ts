import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentLoaded$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  contentLoaded() {
    this.contentLoaded$.next(true);
  }

  afterContentLoaded(): BehaviorSubject<boolean> {
    return this.contentLoaded$
  }
}
