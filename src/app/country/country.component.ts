import { Component, Input, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(public route: Router,public http: HttpClient) {}

  title:string="No Country Found";
  service:DataService;
  ngOnInit(): void {
    this.title = history.state.countryKey
    this.service = new DataService(this.http);
    this.service.getGermany().subscribe(x=>{
      console.dir(x)
    })
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
  }
}
