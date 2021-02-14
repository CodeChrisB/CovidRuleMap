import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {IContent, ISafeContent} from '../../assets/Content'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
let content:ISafeContent[]=[];
@Injectable({
  providedIn: 'root'
})

export class DataService {

  url: string = 'https://raw.githubusercontent.com/CodeChrisB/QuickDebugBackend/main';
  http: HttpClient;

  constructor(http: HttpClient,private sanitizer:DomSanitizer) {
    this.http = http;
  }

    // GET-Request: Liefert Response als Observable
    getCountry(countryCode:string): Observable<ISafeContent[]> {
      return this.http.get<IContent[]>(this.url + '/'+countryCode +'.json').pipe(map(data=>{

        data.forEach(c=>{
          content.push({link:(this.trustUrl(c.link)),date:c.date,country:c.country})
        })

        return content;
      }));
    }

    trustUrl(url:string):SafeUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }


}

