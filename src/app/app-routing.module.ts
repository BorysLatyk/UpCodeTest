import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SliderComponent} from './slider/slider.component';
import {ServicesComponent} from './services/services.component';

const routes: Routes = [
  { path: 'home', component: SliderComponent},
  { path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
