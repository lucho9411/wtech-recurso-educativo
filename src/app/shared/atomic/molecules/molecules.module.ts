import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Actividad1Component } from './actividad1/actividad1.component';
import { Actividad2Component } from './actividad2/actividad2.component';



@NgModule({
  declarations: [
    Actividad1Component,
    Actividad2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Actividad1Component,
    Actividad2Component
  ]
})
export class MoleculesModule { }
