import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from './atomic/molecules/molecules.module';
import { AtomsModule } from './atomic/atoms/atoms.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [
    AtomsModule,
    MoleculesModule
  ]
})
export class SharedModule { }
