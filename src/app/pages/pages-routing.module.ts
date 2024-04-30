import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Actividad1PageComponent } from './actividad1-page/actividad1-page.component';
import { Actividad2PageComponent } from './actividad2-page/actividad2-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'actividad1',
    component: Actividad1PageComponent
  },
  {
    path: 'actividad2',
    component: Actividad2PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
