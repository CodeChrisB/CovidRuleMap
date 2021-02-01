import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropeMapComponent } from './europeMap/europeMap.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CountryComponent } from './country/country.component';
import { SubmitComponent } from './submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    EuropeMapComponent,
    CountryComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
