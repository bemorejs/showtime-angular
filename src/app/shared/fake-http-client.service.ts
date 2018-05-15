import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { FOO } from './data.mock';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpClient {
  get<T>(path: string): Observable<T> {
    console.info('getting something from', path);
    return of(<any>FOO as T);
  }
}
