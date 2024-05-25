import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PeriodicDetailsComponent} from "./periodic-details/periodic-details.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: ':id',
    component: PeriodicDetailsComponent,
    outlet: 'side-bar'
  }
];
