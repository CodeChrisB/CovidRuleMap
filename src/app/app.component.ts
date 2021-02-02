import { Component, ViewChild } from '@angular/core';
import { CountryComponent } from './country/country.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'highcharts-map';
  @ViewChild(CountryComponent ) child: CountryComponent ;

  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
    this.child.onCountryChange(event);
  }

  countryChange(){
    alert('fdas')
  }
}
