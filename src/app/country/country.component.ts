import { Component, Input, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { IContent, ISafeContent } from 'src/assets/Content';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(public route: Router,public http: HttpClient,private sanitizer:DomSanitizer) {}

  title:string="No Country Found";
  service:DataService;
  content:ISafeContent[];
  show:boolean =false;
  ngOnInit(): void {
    this.service = new DataService(this.http,this.sanitizer);
    console.dir(this.service)

    let url = window.location.href;
    url = url.substring(url.length-2,url.length);
    console.dir(url)


  }

  main(){
    this.route.navigate(['/oet/map']);
  }

  @Input() event: Event;
  onCountryChange($event){
    var country = null;
    for (var key in $event.point.options) {
      if (country == null) country = $event.point.options[key];
    }
    this.title = country
    this.show=true;
    this.showCountryData(country)
  }

  showCountryData(country:string){
    this.title = country
    this.service.getCountry(country).subscribe(x=>{
      this.content = null //clear old coontent
      this.content = x; //set new content
    })
  }
  trustUrl(url:string):SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  countryString():string{
   var string =""

   switch(this.title){
     case 'de':
       string="Germany"
     break;
   }
   return string;
  }


  isCountryKey(key:string){
    return [
      'ie','is','pt','no','se','dk','de','nl','be','lu','es','fr','pl','cz','at','li','sk',
      'hu','si','it','sm','hr','ba','yf','me','al','mk','fi','ee','lv','lt','by','ua','md',
      'ro','bg','gr','cy'
    ].filter(x=>x==key).length>0
  }
}
