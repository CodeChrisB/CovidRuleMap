import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuropeMapComponent } from './europeMap/europeMap.component';
import { CountryComponent } from '../app/country/country.component';
import { SubmitComponent } from './submit/submit.component';
const routes: Routes = [
  { path: 'oet/map', component: EuropeMapComponent },
  { path: 'oet/submit', component: SubmitComponent },
  //all european countries get a own url but the component is the same
  { path: 'oet/map/ie', component: CountryComponent },
  { path: 'oet/map/is', component: CountryComponent },
  { path: 'oet/map/gb', component: CountryComponent },
  { path: 'oet/map/pt', component: CountryComponent },
  { path: 'oet/map/no', component: CountryComponent },
  { path: 'oet/map/se', component: CountryComponent },
  { path: 'oet/map/dk', component: CountryComponent },
  { path: 'oet/map/de', component: CountryComponent },
  { path: 'oet/map/nl', component: CountryComponent },
  { path: 'oet/map/be', component: CountryComponent },
  { path: 'oet/map/lu', component: CountryComponent },
  { path: 'oet/map/es', component: CountryComponent },
  { path: 'oet/map/fr', component: CountryComponent },
  { path: 'oet/map/pl', component: CountryComponent },
  { path: 'oet/map/cz', component: CountryComponent },
  { path: 'oet/map/at', component: CountryComponent },
  { path: 'oet/map/ch', component: CountryComponent },
  { path: 'oet/map/li', component: CountryComponent },
  { path: 'oet/map/sk', component: CountryComponent },
  { path: 'oet/map/hu', component: CountryComponent },
  { path: 'oet/map/si', component: CountryComponent },
  { path: 'oet/map/it', component: CountryComponent },
  { path: 'oet/map/sm', component: CountryComponent },
  { path: 'oet/map/hr', component: CountryComponent },
  { path: 'oet/map/ba', component: CountryComponent },
  { path: 'oet/map/yf', component: CountryComponent },
  { path: 'oet/map/me', component: CountryComponent },
  { path: 'oet/map/al', component: CountryComponent },
  { path: 'oet/map/mk', component: CountryComponent },
  { path: 'oet/map/fi', component: CountryComponent },
  { path: 'oet/map/ee', component: CountryComponent },
  { path: 'oet/map/lv', component: CountryComponent },
  { path: 'oet/map/lt', component: CountryComponent },
  { path: 'oet/map/by', component: CountryComponent },
  { path: 'oet/map/ua', component: CountryComponent },
  { path: 'oet/map/md', component: CountryComponent },
  { path: 'oet/map/ro', component: CountryComponent },
  { path: 'oet/map/bg', component: CountryComponent },
  { path: 'oet/map/gr', component: CountryComponent },
  { path: 'oet/map/tr', component: CountryComponent },
  { path: 'oet/map/cy', component: CountryComponent },

  { path: '', pathMatch: 'full', redirectTo: 'oet/map' }, //standard path
  { path: "*", redirectTo:"oet/map"}, //redirect wrong urls to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
