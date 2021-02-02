import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {IContent} from '../../assets/Content'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url: string = 'https://raw.githubusercontent.com/CodeChrisB/QuickDebugBackend/main';
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

    // GET-Request: Liefert Response als Observable
    getCountry(countryCode:string): Observable<IContent[]> {
      return this.http.get<IContent[]>(this.url + '/'+countryCode +'.json').pipe(map(data=>data));
    }

}
