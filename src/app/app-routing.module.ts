import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EuropeMapComponent } from './europeMap/europeMap.component';
import { GdprComponent } from './gdpr/gdpr.component';
import { MainComponent } from './main/main.component';
import { SubmitComponent } from './submit/submit.component';
const routes: Routes = [
  { path: 'oet/map', component: MainComponent },
  { path: 'oet/submit', component: SubmitComponent },
  { path: 'oet/gdpr', component: GdprComponent },
  //all european countries get a own url but the component is the same

  { path: '', pathMatch: 'full', redirectTo: 'oet/map' }, //standard path
  { path: "*", redirectTo:"oet/map"}, //redirect wrong urls to the dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
