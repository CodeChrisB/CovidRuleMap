import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SriLankaMapComponent } from './europeMap/europeMap.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    SriLankaMapComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
