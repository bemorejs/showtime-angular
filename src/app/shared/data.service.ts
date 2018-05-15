import { Injectable } from '@angular/core';
import { FakeHttpClient } from './fake-http-client.service';
import { Observable } from 'rxjs/internal/Observable';
import { SelectItem } from './data.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: FakeHttpClient) {}

  getData(): Observable<SelectItem[]> {
    return this.http.get('/my-data');
  }
}
