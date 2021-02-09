import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryComponent } from '../country/country.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(CountryComponent ) child: CountryComponent ;

  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
    this.child.onCountryChange(event);
  }

}
