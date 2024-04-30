import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { Card3Component } from './card3/card3.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoaderComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    TopBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoaderComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    TopBarComponent,
    SideBarComponent
  ]
})
export class AtomsModule { }
