import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { Actividad2PageComponent } from './actividad2-page/actividad2-page.component';
import { Actividad1PageComponent } from './actividad1-page/actividad1-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    Actividad1PageComponent,
    Actividad2PageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
