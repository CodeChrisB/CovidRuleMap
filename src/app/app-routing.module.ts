import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuropeMapComponent } from './europeMap/europeMap.component';
import { CountryComponent } from '../app/country/country.component';
import { SubmitComponent } from './submit/submit.component';
const routes: Routes = [
  { path: 'oet/map', component: EuropeMapComponent },
  { path: 'oet/submit', component: SubmitComponent },
  //all european countries get a own url but the component is the same
  { path: 'oet/country/ie', component: CountryComponent },
  { path: 'oet/country/is', component: CountryComponent },
  { path: 'oet/country/gb', component: CountryComponent },
  { path: 'oet/country/pt', component: CountryComponent },
  { path: 'oet/country/no', component: CountryComponent },
  { path: 'oet/country/se', component: CountryComponent },
  { path: 'oet/country/dk', component: CountryComponent },
  { path: 'oet/country/de', component: CountryComponent },
  { path: 'oet/country/nl', component: CountryComponent },
  { path: 'oet/country/be', component: CountryComponent },
  { path: 'oet/country/lu', component: CountryComponent },
  { path: 'oet/country/es', component: CountryComponent },
  { path: 'oet/country/fr', component: CountryComponent },
  { path: 'oet/country/pl', component: CountryComponent },
  { path: 'oet/country/cz', component: CountryComponent },
  { path: 'oet/country/at', component: CountryComponent },
  { path: 'oet/country/ch', component: CountryComponent },
  { path: 'oet/country/li', component: CountryComponent },
  { path: 'oet/country/sk', component: CountryComponent },
  { path: 'oet/country/hu', component: CountryComponent },
  { path: 'oet/country/si', component: CountryComponent },
  { path: 'oet/country/it', component: CountryComponent },
  { path: 'oet/country/sm', component: CountryComponent },
  { path: 'oet/country/hr', component: CountryComponent },
  { path: 'oet/country/ba', component: CountryComponent },
  { path: 'oet/country/yf', component: CountryComponent },
  { path: 'oet/country/me', component: CountryComponent },
  { path: 'oet/country/al', component: CountryComponent },
  { path: 'oet/country/mk', component: CountryComponent },
  { path: 'oet/country/fi', component: CountryComponent },
  { path: 'oet/country/ee', component: CountryComponent },
  { path: 'oet/country/lv', component: CountryComponent },
  { path: 'oet/country/lt', component: CountryComponent },
  { path: 'oet/country/by', component: CountryComponent },
  { path: 'oet/country/ua', component: CountryComponent },
  { path: 'oet/country/md', component: CountryComponent },
  { path: 'oet/country/ro', component: CountryComponent },
  { path: 'oet/country/bg', component: CountryComponent },
  { path: 'oet/country/gr', component: CountryComponent },
  { path: 'oet/country/tr', component: CountryComponent },
  { path: 'oet/country/cy', component: CountryComponent },

  { path: '', pathMatch: 'full', redirectTo: 'oet/map' }, //standard path
  { path: "*", redirectTo:"oet/map"}, //redirect wrong urls to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
