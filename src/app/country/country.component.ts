import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  title:string="No Country Found"
  ngOnInit(): void {
    this.title = history.state.countryKey
  }

  constructor(public route: Router) {}

  main(){
    this.route.navigate(['/oet/map']);
  }

}
